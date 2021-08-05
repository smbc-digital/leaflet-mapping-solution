/* eslint-disable no-prototype-builtins */

import Leaflet from 'leaflet'
import { fetchAddressData } from '../../Helpers'

Leaflet.Control.SearchControl = Leaflet.Control.extend({
        
    includes: Leaflet.version[0]==='1' ? Leaflet.Evented.prototype : Leaflet.Mixin.Events,

    options: {
        layer: null,					//layer where search markers(is a Leaflet.LayerGroup)				
        sourceData: (rawSearchTerm, callResponse) => fetchAddressData(rawSearchTerm, callResponse),	//function to fill _recordsCache, passed searching text by first param and callback in second							
        propertyLoc: 'loc',				//field for remapping location, using array: ['latname','lonname'] for select double fields(ex. ['lat','lon'] ) support dotted format: 'prop.subprop.title'
        propertyName: 'title',			//property in marker.options(or feature.properties for vector layer) trough filter elements in layer,
        formatData: null,				//callback for reformat all data from source to indexed data object
        filterData: (_, val2) => val2,	//callback for filtering data from text searched, params: textSearch, allRecords
        moveToLocation: null,			//callback run on location found, params: latlng, title, map
        buildTip: null,					//function to return row tip html node(or html string), receive text tooltip in first param
        container: '',					//container id to insert Search Control		
        zoom: 18,						//default zoom level for move to location
        minLength: 4,					//minimal text length for autocomplete
        initial: true,					//search elements only by initial text
        casesensitive: false,			//search elements in case sensitive text
        delayType: 400,					//delay while typing for show tooltip
        tooltipLimit: -1,				//limit max results to show in tooltip. -1 for no limit, 0 for no results
        tipAutoSubmit: true,			//auto map panTo when click on tooltip
        firstTipSubmit: false,			//auto select first result con enter click
        autoResize: true,				//autoresize on input change
        textCancel: 'Cancel',		    //title in cancel button		
        textPlaceholder: 'Search...',   //placeholder value	
        position: 'bottomleft'
    },

    _getPath: function (obj, prop) {
        var parts = prop.split('.'),
            last = parts.pop(),
            length = parts.length,
            current = parts[0],
            i = 1

        if (length > 0)
            while ((obj = obj[current]) && i < length)
                current = parts[i++]

        if (obj)
            return obj[last]
    },

    _isObject: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Object]'
    },

    initialize: function (options) {
        Leaflet.Util.setOptions(this, options || {})
        this._inputMinSize = this.options.textPlaceholder ? this.options.textPlaceholder.length : 10
        this._layer = this.options.layer || new Leaflet.LayerGroup()
        this._filterData = this.options.filterData || this._defaultFilterData
        this._formatData = this.options.formatData || this._defaultFormatData
        this._moveToLocation = this.options.moveToLocation || this._defaultMoveToLocation
        this._countertips = 0
        this._recordsCache = {}
        this._currentRequest = null
    },

    onAdd: function (map) {
        this._map = map
        this._container = Leaflet.DomUtil.create('div', 'smbc-map-search')
        this._input = this._createInput(this.options.textPlaceholder, 'smbc-map-search__input')
        this._tooltip = this._createTooltip('smbc-map-search__tooltips')
        this._cancel = this._createCancel(this.options.textCancel, 'smbc-map-search__cancel')

        this.setLayer(this._layer)
        this._handleAutoresize()

        map.on({
            'resize': this._handleAutoresize
        }, this)

        Leaflet.DomEvent.disableClickPropagation(this._container)
        Leaflet.DomEvent.disableScrollPropagation(this._container)
        return this._container
    },

    addTo: function (map) {
        if (this.options.container) {
            this._container = this.onAdd(map)
            this._wrapper = Leaflet.DomUtil.get(this.options.container)
            this._wrapper.style.position = 'relative'
            this._wrapper.appendChild(this._container)
        }
        else
            Leaflet.Control.prototype.addTo.call(this, map)

        return this
    },

    onRemove: function (map) {
        this._recordsCache = {}
        map.off({
            'resize': this._handleAutoresize
        }, this)
    },

    setLayer: function (layer) {
        this._layer = layer
        this._layer.addTo(this._map)

        return this
    },
        
    cancel: function() {
        this._input.value = ''
        this._handleKeypress({ keyCode: 8 }) //simulate backspace keypress
        this._input.size = this._inputMinSize
        this._input.focus()
        this._cancel.style.display = 'none'
        this._hideTooltip()
        this.fire('search:cancel')

        return this
    },

    _createInput: function (text, className) {
        var self = this
        var label = Leaflet.DomUtil.create('label', className, this._container)
        var input = Leaflet.DomUtil.create('input', className, this._container)
        input.type = 'text'
        input.size = this._inputMinSize
        input.value = ''
        input.autocomplete = 'off'
        input.autocorrect = 'off'
        input.autocapitalize = 'off'
        input.placeholder = text
        input.role = 'search'
        input.id = input.role + input.type + input.size

        label.htmlFor = input.id
        label.style.display = 'none'
        label.value = text

        Leaflet.DomEvent
            .disableClickPropagation(input)
            .on(input, 'keyup', this._handleKeypress, this)
            .on(input, 'paste', function(e) {
                setTimeout(function (e) {
                    self._handleKeypress(e)
                },10,e)
            }, this)
        
        return input
    },

    _createCancel: function (title, className) {
        var cancel = Leaflet.DomUtil.create('a', className, this._container)
        cancel.href = '#'
        cancel.title = title
        cancel.style.display = 'none'

        Leaflet.DomEvent
            .on(cancel, 'click', Leaflet.DomEvent.stop, this)
            .on(cancel, 'click', this.cancel, this)

        return cancel
    },
    
    _createTooltip: function (className) {
        var tool = Leaflet.DomUtil.create('ul', className, this._container)
        tool.style.display = 'none'
        Leaflet.DomEvent
            .disableClickPropagation(tool)

        return tool
    },

    _createTip: function (text, val) {
        var tip
        
        if (this.options.buildTip) {
            tip = this.options.buildTip.call(this, text, val)
            if (typeof tip === 'string') {
                var tmpNode = Leaflet.DomUtil.create('div')
                tmpNode.innerHTML = tip
                tip = tmpNode.firstChild
            }
        }
        else {
            tip = Leaflet.DomUtil.create('li', '')
            tip.innerHTML = text
        }
        
        Leaflet.DomUtil.addClass(tip, 'smbc-map-search__tooltip')
        tip._text = text

        Leaflet.DomEvent
            .disableClickPropagation(tip)		
            .on(tip, 'click', Leaflet.DomEvent.stop, this)
            .on(tip, 'click', function() {
                this._input.value = text
                this._handleAutoresize()
                this._input.focus()
                this._hideTooltip()
                this._handleSubmit()
            }, this)

        return tip
    },

    _defaultFilterData: function (text, records) {
        var regexMatchPoint, caseSensitivityValue, regSearch, filteredRecords = {}
        text = text.replace(/[.*+?^${}()|[\]\\]/g, '')
        if (text === '')
            return []

        regexMatchPoint = this.options.initial ? '^' : ''
        caseSensitivityValue = !this.options.casesensitive ? 'i' : undefined

        regSearch = new RegExp(regexMatchPoint + text, caseSensitivityValue)

        for (var key in records) {
            if (regSearch.test(key))
                filteredRecords[key]= records[key]
        }
        
        return filteredRecords
    },

    showTooltip: function (records) {
        this._countertips = 0
        this._tooltip.innerHTML = ''
        this._tooltip.currentSelection = -1

        if (this.options.tooltipLimit) {
            for (var key in records) {
                if(this._countertips === this.options.tooltipLimit)
                    break
                
                this._countertips++
                this._tooltip.appendChild(this._createTip(key, records[key]))
            }
        }
        
        if (this._countertips > 0)
            this._tooltip.style.display = 'block'
        else
            this._hideTooltip()

        this._tooltip.scrollTop = 0

        return this._countertips
    },

    _hideTooltip: function () {
        this._tooltip.style.display = 'none'
        this._tooltip.innerHTML = ''

        return 0
    },

    _defaultFormatData: function (json) {
        var self = this,
            propName = this.options.propertyName,
            propLoc = this.options.propertyLoc,
            i, jsonret = {}

        for (i in json)
            jsonret[self._getPath(json[i],propName)] = Leaflet.latLng(self._getPath(json[i],propLoc))

        return jsonret
    },
    
    _handleKeypress: function (e) {
        var self = this
        switch (e.keyCode)
        {
            case 13: //Enter
                if (this._countertips == 1 || (this.options.firstTipSubmit && this._countertips > 0)) {
                    if (this._tooltip.currentSelection == -1) {
                        this._handleArrowSelect(1)
                    }
                }

                this._handleSubmit()
            break
            case 38: //Up
                this._handleArrowSelect(-1)
            break
            case 40: //Down
                this._handleArrowSelect(1)
            break
            case 37: //Left
            case 39: //Right
            case 16: //Shift
            case 17: //Ctrl
            case 35: //End
            case 36: //Home
            case 27: //Esc
            break
            default: //All keys including Backspace and Delete
                var sanitizedString = this._input.value.replace(/[^a-zA-Z0-9]/g, '')
                if (this._input.value.length)
                    this._cancel.style.display = 'block'
                else
                    this._cancel.style.display = 'none'

                if (sanitizedString.length >= this.options.minLength) {
                    clearTimeout(this.timerKeypress)				
                    this.timerKeypress = setTimeout(function () {
                        self._fillRecordsCache(sanitizedString)
                    }, this.options.delayType)
                }
                else
                    this._hideTooltip()
        }

        this._handleAutoresize()
    },

    searchText: function (text) {
        var code = text.charCodeAt(text.length)
        this._input.value = text
        this._input.style.display = 'block'
        this._handleKeypress({keyCode: code})
    },
    
    _fillRecordsCache: function (sanitizedString) { 
        var self = this,
            records

        if (this._currentRequest && this._currentRequest.abort)
        this._currentRequest.abort()

        this._retrieveData = this.options.sourceData

        this._currentRequest = this._retrieveData.call(this, sanitizedString.trim(), function (data) {           
            self._recordsCache = self._formatData.call(self, data)
            if (self.options.sourceData)
                records = self._filterData(self._input.value, self._recordsCache)
            else
                records = self._recordsCache

            if (Object.keys(records).length === 0)
                self.showTooltip({'No results found': null})
            else 
                self.showTooltip(records)
        })
    },
    
    _handleAutoresize: function () {
        var maxWidth

        if (this._input.style.maxWidth !== this._map._container.offsetWidth) {
            maxWidth = this._map._container.clientWidth
            maxWidth -= 92
            this._container.style.maxWidth = maxWidth.toString() + 'px'
            maxWidth -= 36
            this._input.style.maxWidth = maxWidth.toString() + 'px'
        }

        if (this.options.autoResize && (this._container.offsetWidth + 20 < this._map._container.offsetWidth)) {
            this._input.size = this._input.value.length < this._inputMinSize ? this._inputMinSize : this._input.value.length
        }
    },

    _handleArrowSelect: function (velocity) {
        var searchTips = this._tooltip.hasChildNodes() ? this._tooltip.childNodes : []
            
        for (var i=0; i<searchTips.length; i++)
            Leaflet.DomUtil.removeClass(searchTips[i], 'smbc-map-search__tooltip--select')
        
        if ((velocity == 1 ) && (this._tooltip.currentSelection >= (searchTips.length - 1))) {
            Leaflet.DomUtil.addClass(searchTips[this._tooltip.currentSelection], 'smbc-map-search__tooltip--select')
        }
        else if ((velocity == -1 ) && (this._tooltip.currentSelection <= 0)) {
            this._tooltip.currentSelection = -1
        }
        else if (this._tooltip.style.display != 'none') {
            this._tooltip.currentSelection += velocity
            Leaflet.DomUtil.addClass(searchTips[this._tooltip.currentSelection], 'smbc-map-search__tooltip--select')
            this._input.value = searchTips[this._tooltip.currentSelection]._text
            var tipOffsetTop = searchTips[this._tooltip.currentSelection].offsetTop
            
            if (tipOffsetTop + searchTips[this._tooltip.currentSelection].clientHeight >= this._tooltip.scrollTop + this._tooltip.clientHeight) {
                this._tooltip.scrollTop = tipOffsetTop - this._tooltip.clientHeight + searchTips[this._tooltip.currentSelection].clientHeight
            }
            else if (tipOffsetTop <= this._tooltip.scrollTop) {
                this._tooltip.scrollTop = tipOffsetTop
            }
        }
    },

    _handleSubmit: function () {
        var loc = this._getLocation(this._input.value)
        if (!loc)
            return

        this._hideTooltip()
        this.showLocation(loc, this._input.value)
        this.fire('search:locationfound', {
            latlng: loc,
            text: this._input.value,
            layer: loc.layer ? loc.layer : null
        })

        this._input.blur()
    },

    _getLocation: function (key) {
        if (this._recordsCache.hasOwnProperty(key))
            return this._recordsCache[key]
        else
            return false
    },

    _defaultMoveToLocation: function (latlng) {
        this._map.setView(latlng, this.options.zoom)
    },

    showLocation: function (latlng, title) {
        var self = this
        self._map.once('moveend zoomend', function() {
            if (self._markerSearch) 
                self._markerSearch.addTo(self._map).setLatLng(latlng)  
        })

        self._moveToLocation(latlng, title, self._map)

        return self
    }
})

Leaflet.Map.addInitHook(function () {
    if (this.options.searchControl) {
        this.searchControl = Leaflet.control.search(this.options.searchControl)
        this.addControl(this.searchControl)
    }
})

var searchControl = function () {
    return new Leaflet.Control.SearchControl()
}

export default searchControl