import Leaflet from 'leaflet'
import { createModuleResolutionCache } from 'typescript'
import Config from '../../Configuration.ts'

const accordionModuleAttribute = 'data-module'
const accordionSectionAttribute = 'data-section'
const baseClass = 'smbc-control-layers'
const dataModuleAccordian = 'smbc-accordion'
const accordionHeaderClass = `${dataModuleAccordian}__header`
const accordionItemClass = `${dataModuleAccordian}__item`

Leaflet.Control.GroupedLayers = Leaflet.Control.extend({
  options: {
    collapsed: true,
    position: 'topright',
    autoZIndex: true,
    groupCheckboxes: false
  },

  initialize: function (baseLayers, overlays, options) {
    Leaflet.Util.setOptions(this, options)
    var layer, subLayer
    const { DynamicData } = Config
    this._layers = []
    this._layerControlInputs = []
    this._lastZIndex = 0
    this._handlingClick = false
    this._groupList = []
    this._domGroups = []
    this._keyStyles = this._getKeyStyles(DynamicData)
    

    for (layer in baseLayers) {
      this._addLayer(baseLayers[layer], layer)
    }

    for (layer in overlays) {
      if (overlays[layer]._layers) {
        this._addLayer(overlays[layer], layer, null, true)
      } else {
        for (subLayer in overlays[layer]) {
          this._addLayer(overlays[layer][subLayer], subLayer, layer, true)
        }
      }
    }
  },

  onAdd: function (map) {
    this._initLayout()
    this._update()

    map
      .on('layeradd', this._onLayerChange, this)
      .on('layerremove', this._onLayerChange, this)

    return this._container
  },

  onRemove: function (map) {
    map
      .off('layeradd', this._onLayerChange, this)
      .off('layerremove', this._onLayerChange, this)
  },

  addBaseLayer: function (layer, name) {
    this._addLayer(layer, name)
    this._update()
    return this
  },

  addOverlay: function (layer, name, group) {
    if (group) {
      this._addLayer(layer, name, group, true)
    } else {
      this._addLayer(layer, name, null, true)
    }
    this._update()
    return this
  },

  removeLayer: function (layer) {
    var id = Leaflet.Util.stamp(layer)
    var _layer = this._getLayer(id)
    if (_layer) {
      delete this._layers[this._layers.indexOf(_layer)]
    }

    this._update()
    return this
  },

  _getLayer: function (id) {
    for (var i = 0; i < this._layers.length; i++) {
      if (this._layers[i] && Leaflet.stamp(this._layers[i].layer) === id) {
        return this._layers[i]
      }
    }
  },

  _initLayout: function () {
    var container = this._container = Leaflet.DomUtil.create('div', baseClass)

    container.setAttribute('aria-haspopup', true)
    Leaflet.DomEvent.disableClickPropagation(container)
		Leaflet.DomEvent.disableScrollPropagation(container)

    var section = this._section = Leaflet.DomUtil.create('div', `${baseClass}__list`)
      
    if (this.options.collapsed) {
      var link = this._layersLink = Leaflet.DomUtil.create('a', baseClass + '__toggle', container)
      link.href = '#'
      link.title = 'Layers'

      var closeLink = this._closeLink = Leaflet.DomUtil.create('a', 'smbc-control-layers__list-close-button', section)
      closeLink.href = '#'
      closeLink.title = 'Close'
      closeLink.innerText = 'X'
      Leaflet.DomEvent.on(closeLink, 'click', this._collapse, this)
      this._topseparator = Leaflet.DomUtil.create('div', `${baseClass}__separator`, section)
      
      if (Leaflet.Browser.touch) {
        Leaflet.DomEvent.on(link, 'click', Leaflet.DomEvent.stop).on(link, 'click', this._expand, this)
        this._map.on('click', this._collapse, this)
      } else {   
        Leaflet.DomEvent.on(link, 'click', Leaflet.DomEvent.stop).on(link, 'click', this._expand, this)
      }
    } else {
      this._expand()
    }

    this._baseLayersList = Leaflet.DomUtil.create('div', `${baseClass}__base`, section)
    this._separator = Leaflet.DomUtil.create('div', `${baseClass}__separator`, section)
    this._overlaysList = Leaflet.DomUtil.create('div', `${baseClass}__overlays`, section)
    this._overlaysList.setAttribute(accordionModuleAttribute, dataModuleAccordian)

    container.appendChild(section)
  },

  _addLayer: function (layer, name, group, overlay) {

    var _layer = {
      layer: layer,
      name: name,
      overlay: overlay
    }

    this._layers.push(_layer)

    group = group || ''
    var groupId = this._indexOf(this._groupList, group)

    if (groupId === -1) {
      groupId = this._groupList.push(group) - 1
    }

    _layer.group = {
      name: group,
      id: groupId
    }

    if (this.options.autoZIndex && layer.setZIndex) {
      this._lastZIndex++
      layer.setZIndex(this._lastZIndex)
    }
  },

  _update: function () {
    if (!this._container) {
      return
    }

    this._baseLayersList.innerHTML = ''
    this._overlaysList.innerHTML = ''
    this._domGroups.length = 0
    this._layerControlInputs = []

    var baseLayersPresent = false,
      overlaysPresent = false,
      i, obj

    for (i = 0; i < this._layers.length; i++) {
      obj = this._layers[i]
      if (obj.overlay) {
        this._addOverlay(obj)
      } else {
        this._addBaseLayer(obj)
      }
      overlaysPresent = overlaysPresent || obj.overlay
      baseLayersPresent = baseLayersPresent || !obj.overlay
    }

    this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none'
  },

  _onLayerChange: function (e) {
    var obj = this._getLayer(Leaflet.Util.stamp(e.layer)),
      type

    if (!obj) {
      return
    }

    if (!this._handlingClick) {
      this._update()
    }

    if (obj.overlay) {
      type = e.type === 'layeradd' ? 'overlayadd' : 'overlayremove'
    } else {
      type = e.type === 'layeradd' ? 'baselayerchange' : null
    }

    if (type) {
      this._map.fire(type, obj)
    }
  },

  _addOverlay: function (obj) {
    var input, label, mapKey, header, groupDiv
    var container = this._overlaysList
    var div = Leaflet.DomUtil.create('div', `${baseClass}__layer`)
    var checked = this._map.hasLayer(obj.layer)
    var group = obj.group.id > 0
    
    if (group) {
      groupDiv = this._domGroups[obj.group.id]
      if (!groupDiv) {
        groupDiv = Leaflet.DomUtil.create('div', `${baseClass}__group`)
        groupDiv.id = `${baseClass}__group-` + obj.group.id
        groupDiv.setAttribute(accordionSectionAttribute, dataModuleAccordian)
        
        header = Leaflet.DomUtil.create('header', `${accordionHeaderClass} ${baseClass}__group-header`, groupDiv)
        label = Leaflet.DomUtil.create('span', '', header)
        label.innerText = obj.group.name
      
        if (this.options.groupCheckboxes) {
          var groupInput = Leaflet.DomUtil.create('input', `${baseClass}__group-selector`, header)
          groupInput.id = obj.group.name
          groupInput.type = 'checkbox'
          groupInput.groupId = obj.group.id
          Leaflet.DomEvent.on(groupInput, 'click', this._onGroupInputClick, this)
        }

        this._domGroups[obj.group.id] = groupDiv
      }

      if (this.options.groupCheckboxes && checked) {
        groupDiv.querySelector('input').checked = true
      }
      div.className = div.className + ' ' + accordionItemClass
      container.appendChild(groupDiv)
    }

    div.style = 'display: flex'
    input = Leaflet.DomUtil.create('input', `${baseClass}__selector`, div)
    input.defaultChecked = checked
    input.id = obj.name
    input.type = 'checkbox'
    input.layerId = Leaflet.Util.stamp(obj.layer)
    input.groupId = obj.group.id
    label = Leaflet.DomUtil.create('label', '', div)
    label.innerText = obj.name
    label.htmlFor = obj.name
    label.style = 'flex: 1'

    mapKey = Leaflet.DomUtil.create('span', '', div)
    mapKey.style = 'border:#eee solid 2px; background-color:none width: 18px; height: -18px; margin: 2px 0px 2px 2px'
    mapKey.innerHTML = `<svg width="18" height="18">${this._keyStyles[obj.name]}</svg>`

  
    this._layerControlInputs.push(input)
    Leaflet.DomEvent.on(input, 'click', this._onInputClick, this)

    if (group) {
      groupDiv.appendChild(div)
    } else {
      container.appendChild(div)
    }
  },

  _addBaseLayer: function (obj) {
    var container = this._baseLayersList
    var checked = this._map.hasLayer(obj.layer)
    
    var div = Leaflet.DomUtil.create('div', `${baseClass}__layer`)

    var input = Leaflet.DomUtil.create('input', '', div)
    input.defaultChecked = checked
    input.id = obj.name
    input.type = 'radio'
    input.name =  'leaflet-base-layers'
    input.layerId = Leaflet.Util.stamp(obj.layer)
    input.groupId = obj.group.id
    
    this._layerControlInputs.push(input)
    Leaflet.DomEvent.on(input, 'click', this._onInputClick, this)
    
    var label = Leaflet.DomUtil.create('label', '', div)
    label.innerText = obj.name
    label.htmlFor = obj.name

    container.appendChild(div)
  },

  _onGroupInputClick: function (event) {
    this._handlingClick = true

    var groupInput = event.target
    var groupId = event.target.groupId
		var groupInputs = this._layerControlInputs.filter(input => input.groupId == groupId)
    var i, input, layer

    if (groupInput.checked) {
      var uncheckedInputs = groupInputs.filter(input => input.checked == false)
      for (i = 0; i < uncheckedInputs.length; i++) {
        input = uncheckedInputs[i]
        layer = this._getLayer(input.layerId).layer
        if (!this._map.hasLayer(layer)) {
          this._map.addLayer(layer)
          input.checked = true
        }
      }
    } else {
      var checkedInputs = groupInputs.filter(input => input.checked)
      for (i = 0; i < checkedInputs.length; i++) {
        input = checkedInputs[i]
        layer = this._getLayer(input.layerId).layer
        if (this._map.hasLayer(layer)) {
          this._map.removeLayer(layer)
          input.checked = false
        }
      }
    }

    this._handlingClick = false
  },

  _onInputClick: function (event) {
    this._handlingClick = true
    var input = event.target
    var layer = this._getLayer(input.layerId).layer

    if (input.type === 'checkbox') {
      if (input.checked) {
        if (!this._map.hasLayer(layer)) {
          this._map.addLayer(layer)
        }
      } else {
        if (this._map.hasLayer(layer)) {
          this._map.removeLayer(layer)
        }
      }
    } else if (input.type === 'radio') {
      var radios = this._layerControlInputs.filter(input => input.name)
      for (var x = 0; x < radios.length; x++) {
        var radio = radios[x]
        layer = this._getLayer(radio.layerId).layer
        if (radio.checked) {
          if (!this._map.hasLayer(layer)) {
            this._map.addLayer(layer)
          }
        } else {
          if (this._map.hasLayer(layer)) {
            this._map.removeLayer(layer)
          }
        }
      }
    }
    
    if (this.options.groupCheckboxes) {
      var groupId = input.groupId
      if (groupId > 0) {
        var groupInput = this._domGroups[groupId].querySelector('input')
        var inputs = this._layerControlInputs.filter(input => input.groupId == groupId)
        groupInput.checked = inputs.some(input => input.checked)
      }
  
    }
    this._handlingClick = false
  },

  _expand: function () {
    Leaflet.DomUtil.addClass(this._container, `${baseClass}--expanded`)
    // permits to have a scrollbar if overlays heighter than the map.
    var acceptableHeight = this._map._size.y - (this._container.offsetTop * 4)
    if (acceptableHeight < this._section.clientHeight) {
      Leaflet.DomUtil.addClass(this._section, `${baseClass}--scrollbar`)
      this._section.style.height = acceptableHeight + 'px'
    }
  },

  _collapse: function () {
    this._container.className = this._container.className.replace(` ${baseClass}--expanded`, '')
  },

  _indexOf: function (arr, obj) {
    for (var i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === obj) {
        return i
      }
    }
    return -1
  },

  _getKeyStyles: function(DynamicData) {
    let styles = {} 
    for (var x = 0; x < DynamicData.length; x++) {
      let layer = DynamicData[x]
      
      if(typeof layer.key !== 'undefined'){    
        let style
        if(typeof layer.layerOptions.style === 'object')
        {
          style = layer.layerOptions.style
        }
        else if(typeof layer.layerOptions.style === 'function')
        {
          style = layer.layerOptions.style(layer.key)
        }
        else 
        {
          continue
        }
      
        let borderColor = this._hexToRGB(style.color,1)
        let fillColor = this._hexToRGB(style.fillColor, style.fillOpacity)
        let inlineStyle =  `stroke:${borderColor}; stroke-width: 3px; fill:${fillColor};`
        

        if (typeof layer.layerOptions.pointToLayer !== 'undefined'){
           styles[layer.key] =  `<circle cx="9" cy="9" r="6" style="${inlineStyle}" />`
         }
         else{
            styles[layer.key] = `<rect x="2" y="2" width="14" height="14" style="${inlineStyle}" />`
        }
          
      }
    }
    return styles    
    },

    _hexToRGB: function (hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${alpha})`
    }

})

var groupedLayers = function (baseLayers, groupedOverlays, options) {
  return new Leaflet.Control.GroupedLayers(baseLayers, groupedOverlays, options)
}

export default groupedLayers