import Leaflet from 'leaflet'

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
    this._layers = []
    this._layerControlInputs = []
    this._lastZIndex = 0
    this._handlingClick = false
    this._groupList = []
    this._domGroups = []

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
    var className = 'leaflet-control-layers',
      container = this._container = Leaflet.DomUtil.create('div', className)

    // Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
    container.setAttribute('aria-haspopup', true)

    if (Leaflet.Browser.touch) {
      Leaflet.DomEvent.on(container, 'click', Leaflet.DomEvent.stopPropagation)
    } else {
      Leaflet.DomEvent.disableClickPropagation(container)
      Leaflet.DomEvent.on(container, 'wheel', Leaflet.DomEvent.stopPropagation)
    }

    var section = this._section = Leaflet.DomUtil.create('section', className + '-list')

    if (this.options.collapsed) {
      if (!Leaflet.Browser.android) {
        Leaflet.DomEvent.on(container, 'mouseover', this._expand, this).on(container, 'mouseout', this._collapse, this)
      }
      var link = this._layersLink = Leaflet.DomUtil.create('a', className + '-toggle', container)
      link.href = '#'
      link.title = 'Layers'

      if (Leaflet.Browser.touch) {
        Leaflet.DomEvent.on(link, 'click', Leaflet.DomEvent.stop).on(link, 'click', this._expand, this)
      } else {
        Leaflet.DomEvent.on(link, 'focus', this._expand, this)
      }

      this._map.on('click', this._collapse, this)

      // TODO keyboard accessibility

    } else {
      this._expand()
    }

    this._baseLayersList = Leaflet.DomUtil.create('div', className + '-base', section)
    this._separator = Leaflet.DomUtil.create('div', className + '-separator', section)
    this._overlaysList = Leaflet.DomUtil.create('div', className + '-overlays', section)

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
      this._addItem(obj)
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

  _addItem: function (obj) {
    var label = document.createElement('label'),
      input,
      checked = this._map.hasLayer(obj.layer),
      container

    input = document.createElement('input')
    input.className = 'leaflet-control-layers-selector'
    input.defaultChecked = checked
    input.type = obj.overlay ? 'checkbox' : 'radio'
    if (!obj.overlay) {
      input.name = 'leaflet-base-layers'
		}

    this._layerControlInputs.push(input)

    input.layerId = Leaflet.Util.stamp(obj.layer)
    input.groupId = obj.group.id
    Leaflet.DomEvent.on(input, 'click', this._onInputClick, this)

    var name = document.createElement('span')
    name.innerHTML = ' ' + obj.name

    label.appendChild(input)
    label.appendChild(name)

    if (obj.overlay) {
      container = this._overlaysList
      if (obj.group.id > 0) {
        var groupContainer = this._domGroups[obj.group.id]
        if (!groupContainer) {
          groupContainer = document.createElement('div')
          groupContainer.className = 'leaflet-control-layers-group'
          groupContainer.id = 'leaflet-control-layers-group-' + obj.group.id
          var groupLabel = document.createElement('label')
          groupLabel.className = 'leaflet-control-layers-group-label'

          if (obj.group.name !== '') {
            if (this.options.groupCheckboxes) {
              var groupInput = document.createElement('input')
              groupInput.type = 'checkbox'
              groupInput.className = 'leaflet-control-layers-group-selector'
              groupInput.groupId = obj.group.id
              Leaflet.DomEvent.on(groupInput, 'click', this._onGroupInputClick, this)
              groupLabel.appendChild(groupInput)
            }
          }

          var groupName = document.createElement('span')
          groupName.className = 'leaflet-control-layers-group-name'
          groupName.innerHTML = obj.group.name
          groupLabel.appendChild(groupName)

          groupContainer.appendChild(groupLabel)
          container.appendChild(groupContainer)

          this._domGroups[obj.group.id] = groupContainer
        }

        if (checked) {
          var groupInput = groupContainer.querySelector("input")
          groupInput.checked = true
        }

        container = groupContainer
      }
    } else {
      container = this._baseLayersList
    }

    container.appendChild(label)

    return label
  },

  _onGroupInputClick: function (event) {
    this._handlingClick = true

    var groupInput = event.target
    var groupId = event.target.groupId
		var groupInputs = this._layerControlInputs.filter(input => input.groupId == groupId)
    var input, layer

    if (groupInput.checked) {
      var uncheckedInputs = groupInputs.filter(input => input.checked == false)
      for (var i = 0; i < uncheckedInputs.length; i++) {
        input = uncheckedInputs[i]
        layer = this._getLayer(input.layerId).layer
        if (!this._map.hasLayer(layer)) {
          this._map.addLayer(layer)
          input.checked = true
        }
      }
    } else {
      var checkedInputs = groupInputs.filter(input => input.checked)
      for (var i = 0; i < checkedInputs.length; i++) {
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

    if (input.checked) {
      if (!this._map.hasLayer(layer)) {
        this._map.addLayer(layer)
			}
    } else {
      if (this._map.hasLayer(layer)) {
        this._map.removeLayer(layer)
			}
    }
    
    var groupId = input.groupId
    if (groupId > 0) {
      var groupInput = this._domGroups[groupId].querySelector("input")
      var inputs = this._layerControlInputs.filter(input => input.groupId == groupId)
      groupInput.checked = inputs.some(input => input.checked)
    }

    this._handlingClick = false
  },

  _expand: function () {
    Leaflet.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded')
    // permits to have a scrollbar if overlays heighter than the map.
    var acceptableHeight = this._map._size.y - (this._container.offsetTop * 4)
    if (acceptableHeight < this._section.clientHeight) {
      Leaflet.DomUtil.addClass(this._section, 'leaflet-control-layers-scrollbar')
      this._section.style.height = acceptableHeight + 'px'
    }
  },

  _collapse: function () {
    this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '')
  },

  _indexOf: function (arr, obj) {
    for (var i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === obj) {
        return i
      }
    }
    return -1
  }
})

  
var groupedLayers = function (baseLayers, groupedOverlays, options) {
    return new Leaflet.Control.GroupedLayers(baseLayers, groupedOverlays, options)
  }

export { groupedLayers }