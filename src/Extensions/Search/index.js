/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import Leaflet from 'leaflet'

Leaflet.Control.BespokeSearch = L.Control.extend({
        
    includes: L.version[0]==='1' ? L.Evented.prototype : L.Mixin.Events,

    options: {
        layer: null,					//layer where search markers(is a L.LayerGroup)				
        sourceData: null,				//function to fill _recordsCache, passed searching text by first param and callback in second							
        propertyLoc: 'loc',				//field for remapping location, using array: ['latname','lonname'] for select double fields(ex. ['lat','lon'] ) support dotted format: 'prop.subprop.title'
        propertyName: 'title',			//property in marker.options(or feature.properties for vector layer) trough filter elements in layer,
        formatData: null,				//callback for reformat all data from source to indexed data object
        filterData: null,				//callback for filtering data from text searched, params: textSearch, allRecords
        moveToLocation: null,			//callback run on location found, params: latlng, title, map
        buildTip: null,					//function to return row tip html node(or html string), receive text tooltip in first param
        container: '',					//container id to insert Search Control		
        zoom: null,						//default zoom level for move to location
        minLength: 1,					//minimal text length for autocomplete
        initial: true,					//search elements only by initial text
        casesensitive: false,			//search elements in case sensitive text
        delayType: 400,					//delay while typing for show tooltip
        tooltipLimit: -1,				//limit max results to show in tooltip. -1 for no limit, 0 for no results
        tipAutoSubmit: true,			//auto map panTo when click on tooltip
        firstTipSubmit: false,			//auto select first result con enter click
        autoResize: true,				//autoresize on input change
        collapsed: true,				//collapse search control at startup
        autoCollapse: false,			//collapse search control after submit(on button or on tips if enabled tipAutoSubmit)
        autoCollapseTime: 1200,			//delay for autoclosing alert and collapse after blur
        textErr: 'Location not found',	//error message
        textCancel: 'Cancel',		    //title in cancel button		
        textPlaceholder: 'Search...',   //placeholder value	
        position: 'topleft'
    },

    _getPath: function(obj, prop) {
        var parts = prop.split('.'),
            last = parts.pop(),
            len = parts.length,
            cur = parts[0],
            i = 1

        if(len > 0)
            while((obj = obj[cur]) && i < len)
                cur = parts[i++]

        if(obj)
            return obj[last]
    },

    _isObject: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]'
    },

    initialize: function(options) {
        L.Util.setOptions(this, options || {})
        this._inputMinSize = this.options.textPlaceholder ? this.options.textPlaceholder.length : 10
        this._layer = this.options.layer || new L.LayerGroup()
        this._filterData = this.options.filterData || this._defaultFilterData
        this._formatData = this.options.formatData || this._defaultFormatData
        this._moveToLocation = this.options.moveToLocation || this._defaultMoveToLocation
        this._autoTypeTmp = this.options.autoType	//useful for disable autoType temporarily in delete/backspace keydown
        this._countertips = 0		//number of tips items
        this._recordsCache = {}	//key,value table! to store locations! format: key,latlng
        this._curReq = null
    },

    onAdd: function (map) {
        this._map = map
        this._container = L.DomUtil.create('div', 'leaflet-control-search')
        this._input = this._createInput(this.options.textPlaceholder, 'search-input')
        this._tooltip = this._createTooltip('search-tooltip')
        this._cancel = this._createCancel(this.options.textCancel, 'search-cancel')
        this._alert = this._createAlert('search-alert')

        if(this.options.collapsed===false)
            this.expand(this.options.collapsed)

        this.setLayer( this._layer )

        map.on({
            'resize': this._handleAutoresize
        }, this)

        return this._container
    },

    addTo: function (map) {

        if(this.options.container) {
            this._container = this.onAdd(map)
            this._wrapper = L.DomUtil.get(this.options.container)
            this._wrapper.style.position = 'relative'
            this._wrapper.appendChild(this._container)
        }
        else
            L.Control.prototype.addTo.call(this, map)

        return this
    },

    onRemove: function(map) {
        this._recordsCache = {}
        map.off({
            'resize': this._handleAutoresize
        }, this)
    },

    setLayer: function(layer) {
        this._layer = layer
        this._layer.addTo(this._map)
        return this
    },
    
    showAlert: function(text) {
        var self = this
        text = text || this.options.textErr
        this._alert.style.display = 'block'
        this._alert.innerHTML = text
        clearTimeout(this.timerAlert)
        
        this.timerAlert = setTimeout(function() {
            self.hideAlert()
        },this.options.autoCollapseTime)
        return this
    },
    
    hideAlert: function() {
        this._alert.style.display = 'none'
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
    
    expand: function(toggle) {
        toggle = typeof toggle === 'boolean' ? toggle : true
        this._input.style.display = 'block'
        L.DomUtil.addClass(this._container, 'search-exp')
        if ( toggle !== false ) {
            this._input.focus()
            this._map.on('dragstart click', this.collapse, this)
        }
        this.fire('search:expanded')
        return this
    },

    collapse: function() {
        this._hideTooltip()
        this.cancel()
        this._alert.style.display = 'none'
        this._input.blur()
        if(this.options.collapsed)
        {
            this._input.style.display = 'none'
            this._cancel.style.display = 'none'
            L.DomUtil.removeClass(this._container, 'search-exp')
            this._map.off('dragstart click', this.collapse, this)
        }
        this.fire('search:collapsed')
        return this
    },
    
    collapseDelayed: function() {	//collapse after delay, used on_input blur
        var self = this
        if (!this.options.autoCollapse) return this
        clearTimeout(this.timerCollapse)
        this.timerCollapse = setTimeout(function() {
            self.collapse()
        }, this.options.autoCollapseTime)
        return this
    },

    collapseDelayedStop: function() {
        clearTimeout(this.timerCollapse)
        return this
    },

    ////start DOM creations
    _createAlert: function(className) {
        var alert = L.DomUtil.create('div', className, this._container)
        alert.style.display = 'none'

        L.DomEvent
            .on(alert, 'click', L.DomEvent.stop, this)
            .on(alert, 'click', this.hideAlert, this)

        return alert
    },

    _createInput: function (text, className) {
        var self = this
        var label = L.DomUtil.create('label', className, this._container)
        var input = L.DomUtil.create('input', className, this._container)
        input.type = 'text'
        input.size = this._inputMinSize
        input.value = ''
        input.autocomplete = 'off'
        input.autocorrect = 'off'
        input.autocapitalize = 'off'
        input.placeholder = text
        input.style.display = 'none'
        input.role = 'search'
        input.id = input.role + input.type + input.size
        
        label.htmlFor = input.id
        label.style.display = 'none'
        label.value = text

        L.DomEvent
            .disableClickPropagation(input)
            .on(input, 'keyup', this._handleKeypress, this)
            .on(input, 'paste', function(e) {
                setTimeout(function(e) {
                    self._handleKeypress(e)
                },10,e)
            }, this)
            .on(input, 'blur', this.collapseDelayed, this)
            .on(input, 'focus', this.collapseDelayedStop, this)
        
        return input
    },

    _createCancel: function (title, className) {
        var cancel = L.DomUtil.create('a', className, this._container)
        cancel.href = '#'
        cancel.title = title
        cancel.style.display = 'none'
        cancel.innerHTML = '<span>&otimes;</span>' //imageless(see css)

        L.DomEvent
            .on(cancel, 'click', L.DomEvent.stop, this)
            .on(cancel, 'click', this.cancel, this)

        return cancel
    },
    
    _createTooltip: function(className) {
        var self = this	
        var tool = L.DomUtil.create('ul', className, this._container)
        tool.style.display = 'none'
        L.DomEvent
            .disableClickPropagation(tool)
            .on(tool, 'blur', this.collapseDelayed, this)
            .on(tool, 'mousewheel', function(e) {
                self.collapseDelayedStop()
                L.DomEvent.stopPropagation(e) //disable zoom map
            }, this)
            .on(tool, 'mouseover', function() {
                self.collapseDelayedStop()
            }, this)
        return tool
    },

    _createTip: function(text, val) {//val is object in recordCache, usually is Latlng
        var tip
        
        if(this.options.buildTip)
        {
            tip = this.options.buildTip.call(this, text, val)
            if(typeof tip === 'string')
            {
                var tmpNode = L.DomUtil.create('div')
                tmpNode.innerHTML = tip
                tip = tmpNode.firstChild
            }
        }
        else
        {
            tip = L.DomUtil.create('li', '')
            tip.innerHTML = text
        }
        
        L.DomUtil.addClass(tip, 'search-tip')
        tip._text = text

        if(this.options.tipAutoSubmit)
            L.DomEvent
                .disableClickPropagation(tip)		
                .on(tip, 'click', L.DomEvent.stop, this)
                .on(tip, 'click', function() {
                    this._input.value = text
                    this._handleAutoresize()
                    this._input.focus()
                    this._hideTooltip()
                    this._handleSubmit()
                }, this)

        return tip
    },

    //////end DOM creations

    _defaultFilterData: function(text, records) {
    
        var regexMatchPoint, caseSensitivityValue, regSearch, filteredRecords = {}

        text = text.replace(/[.*+?^${}()|[\]\\]/g, '')
        if(text==='')
            return []

        regexMatchPoint = this.options.initial ? '^' : ''
        caseSensitivityValue = !this.options.casesensitive ? 'i' : undefined

        regSearch = new RegExp(regexMatchPoint + text, caseSensitivityValue)

        for(var key in records) {
            if( regSearch.test(key) )
            filteredRecords[key]= records[key]
        }
        
        return filteredRecords
    },

    showTooltip: function(records) {
        this._countertips = 0
        this._tooltip.innerHTML = ''
        this._tooltip.currentSelection = -1

        if(this.options.tooltipLimit)
        {
            for(var key in records)
            {
                if(this._countertips === this.options.tooltipLimit)
                    break
                
                this._countertips++

                this._tooltip.appendChild( this._createTip(key, records[key]) )
            }
        }
        
        if(this._countertips > 0)
            this._tooltip.style.display = 'block'
        else
            this._hideTooltip()

        this._tooltip.scrollTop = 0

        return this._countertips
    },

    _hideTooltip: function() {
        this._tooltip.style.display = 'none'
        this._tooltip.innerHTML = ''
        return 0
    },

    _defaultFormatData: function(json) 
    {
        var self = this,
            propName = this.options.propertyName,
            propLoc = this.options.propertyLoc,
            i, jsonret = {}

        if( L.Util.isArray(propLoc) )
            for(i in json)
                jsonret[ self._getPath(json[i],propName) ]= L.latLng( json[i][ propLoc[0] ], json[i][ propLoc[1] ] )
        else
            for(i in json)
                jsonret[ self._getPath(json[i],propName) ]= L.latLng( self._getPath(json[i],propLoc) )

        return jsonret
    },

    _searchInLayer: function(layer, retRecords, propName) {
        var self = this, loc
        console.log('_searchInLayer layer: ' + layer)
        if(layer instanceof L.Control.Search.Marker) return

        if(layer instanceof L.Marker || layer instanceof L.CircleMarker)
        {
            if(self._getPath(layer.options,propName))
            {
                loc = layer.getLatLng()
                loc.layer = layer
                retRecords[ self._getPath(layer.options,propName) ] = loc
            }
            else if(self._getPath(layer.feature.properties,propName))
            {
                loc = layer.getLatLng()
                loc.layer = layer
                retRecords[ self._getPath(layer.feature.properties,propName) ] = loc
            }
            else {
                console.warn('propertyName "'+propName+'" not found in marker')
            }
        }
        else if(layer instanceof L.Path || layer instanceof L.Polyline || layer instanceof L.Polygon)
        {
            if(self._getPath(layer.options,propName))
            {
                loc = layer.getBounds().getCenter()
                loc.layer = layer
                retRecords[ self._getPath(layer.options,propName) ] = loc
            }
            else if(self._getPath(layer.feature.properties,propName))
            {
                loc = layer.getBounds().getCenter()
                loc.layer = layer
                retRecords[ self._getPath(layer.feature.properties,propName) ] = loc
            }
            else {
                //throw new Error("propertyName '"+propName+"' not found in shape"); 
                console.warn('propertyName "'+propName+'" not found in shape')
            }
        }
        else if(layer.hasOwnProperty('feature')) //GeoJSON
        {
        if(layer.feature.properties.hasOwnProperty(propName))
        {
            if(layer.getLatLng && typeof layer.getLatLng === 'function') {
            loc = layer.getLatLng()
            loc.layer = layer			
            retRecords[ layer.feature.properties[propName] ] = loc
            } else if(layer.getBounds && typeof layer.getBounds === 'function') {
            loc = layer.getBounds().getCenter()
            loc.layer = layer		
            retRecords[ layer.feature.properties[propName] ] = loc
            } else {
            console.warn('Unknown type of Layer')
            }
        }
        else {
            console.warn('propertyName "'+propName+'" not found in feature') 
        }
        }
        else if(layer instanceof L.LayerGroup)
        {
            layer.eachLayer(function (layer) {
                self._searchInLayer(layer, retRecords, propName)
            })
        }
    },
    
    _recordsFromLayer: function() {	//return table: key,value from layer
        var self = this,
            retRecords = {},
            propName = this.options.propertyName
        
        this._layer.eachLayer(function (layer) {
            self._searchInLayer(layer, retRecords, propName)
        })
        
        return retRecords
    },
    
    _autoType: function() {
        
        //TODO implements autype without selection(useful for mobile device)
        
        var start = this._input.value.length,
            firstRecord = this._tooltip.firstChild ? this._tooltip.firstChild._text : '',
            end = firstRecord.length

        if (firstRecord.indexOf(this._input.value) === 0) { // If prefix match
            this._input.value = firstRecord
            this._handleAutoresize()

            if (this._input.createTextRange) {
                var selRange = this._input.createTextRange()
                selRange.collapse(true)
                selRange.moveStart('character', start)
                selRange.moveEnd('character', end)
                selRange.select()
            }
            else if(this._input.setSelectionRange) {
                this._input.setSelectionRange(start, end)
            }
            else if(this._input.selectionStart) {
                this._input.selectionStart = start
                this._input.selectionEnd = end
            }
        }
    },

    _hideAutoType: function() {	// deselect text:

        var sel
        if ((sel = this._input.selection) && sel.empty) {
            sel.empty()
        }
        else if (this._input.createTextRange) {
            sel = this._input.createTextRange()
            sel.collapse(true)
            var end = this._input.value.length
            sel.moveStart('character', end)
            sel.moveEnd('character', end)
            sel.select()
        }
        else {
            if (this._input.getSelection) {
                this._input.getSelection().removeAllRanges()
            }
            this._input.selectionStart = this._input.selectionEnd
        }
    },
    
    _handleKeypress: function (e) {	//run _input keyup event
        var self = this
        console.log('Hit handle key press')
        switch(e.keyCode)
        {
            case 27://Esc
                this.collapse()
            break
            case 13://Enter
                if(this._countertips == 1 || (this.options.firstTipSubmit && this._countertips > 0)) {
                    if(this._tooltip.currentSelection == -1) {
                        this._handleArrowSelect(1)
                    }
                }
                this._handleSubmit()	//do search
            break
            case 38://Up
                this._handleArrowSelect(-1)
            break
            case 40://Down
                console.log('Hit handle key press')
                this._handleArrowSelect(1)
            break
            case 37://Left
            case 39://Right
            case 16://Shift
            case 17://Ctrl
            case 35://End
            case 36://Home
            break
            default://All keys including Backspace and Delete
                if(this._input.value.length)
                    this._cancel.style.display = 'block'
                else
                    this._cancel.style.display = 'none'

                if(this._input.value.length >= this.options.minLength)
                {
                    clearTimeout(this.timerKeypress)	//cancel last search request while type in				
                    this.timerKeypress = setTimeout(function() {	//delay before request, for limit jsonp/ajax request

                        self._fillRecordsCache()
                    
                    }, this.options.delayType)
                }
                else
                    this._hideTooltip()
        }

        this._handleAutoresize()
    },

    searchText: function(text) {
        var code = text.charCodeAt(text.length)

        this._input.value = text

        this._input.style.display = 'block'
        L.DomUtil.addClass(this._container, 'search-exp')

        this._autoTypeTmp = false

        this._handleKeypress({keyCode: code})
    },
    
    _fillRecordsCache: function() {
        
        var self = this,
            inputText = this._input.value, records

        if(this._curReq && this._curReq.abort)
            this._curReq.abort()
        //abort previous requests

        L.DomUtil.addClass(this._container, 'search-load')
        // if(this._layer)
        // {
        //     //TODO _recordsFromLayer must return array of objects, formatted from _formatData
        //     this._recordsCache = this._recordsFromLayer()
        //     console.log('_fillRecordsCache recordsCache: ')
        //     console.log(this._recordsCache)
        //     records = this._filterData( this._input.value, this._recordsCache )
        //     console.log('_fillRecordsCache records: ' + records)
        //     this.showTooltip( records )

        //     L.DomUtil.removeClass(this._container, 'search-load')
        // }
        // else
        // {
        //     if(this.options.sourceData)
                this._retrieveData = this.options.sourceData

            // else if(this.options.url)	//jsonp or ajax
            //     this._retrieveData = this.options.jsonpParam ? this._recordsFromJsonp : this._recordsFromAjax

            this._curReq = this._retrieveData.call(this, inputText.trim(), function(data) {
                
                self._recordsCache = self._formatData.call(self, data)

                //TODO refact!
                if(self.options.sourceData)
                    records = self._filterData( self._input.value, self._recordsCache )
                else
                    records = self._recordsCache

                if (Object.keys(records).length === 0)
                    self.showTooltip({'No results found': null})
                else 
                    self.showTooltip( records )
                L.DomUtil.removeClass(self._container, 'search-load')
            })
        // }
    },
    
    _handleAutoresize: function() {
        var maxWidth

        if (this._input.style.maxWidth !== this._map._container.offsetWidth) {
            maxWidth = this._map._container.clientWidth

            // other side margin + padding + width border + width search-button + width search-cancel
            maxWidth -= 10 + 20 + 1 + 30 + 22

            this._input.style.maxWidth = maxWidth.toString() + 'px'
        }

        if (this.options.autoResize && (this._container.offsetWidth + 20 < this._map._container.offsetWidth)) {
            this._input.size = this._input.value.length < this._inputMinSize ? this._inputMinSize : this._input.value.length
        }
    },

    _handleArrowSelect: function(velocity) {
    
        var searchTips = this._tooltip.hasChildNodes() ? this._tooltip.childNodes : []
            
        for (var i=0; i<searchTips.length; i++)
            L.DomUtil.removeClass(searchTips[i], 'search-tip-select')
        
        if ((velocity == 1 ) && (this._tooltip.currentSelection >= (searchTips.length - 1))) { // If at end of list.
            L.DomUtil.addClass(searchTips[this._tooltip.currentSelection], 'search-tip-select')
        }
        else if ((velocity == -1 ) && (this._tooltip.currentSelection <= 0)) { // Going back up to the search box.
            this._tooltip.currentSelection = -1
        }
        else if (this._tooltip.style.display != 'none') {
            this._tooltip.currentSelection += velocity
            
            L.DomUtil.addClass(searchTips[this._tooltip.currentSelection], 'search-tip-select')
            
            this._input.value = searchTips[this._tooltip.currentSelection]._text

            // scroll:
            var tipOffsetTop = searchTips[this._tooltip.currentSelection].offsetTop
            
            if (tipOffsetTop + searchTips[this._tooltip.currentSelection].clientHeight >= this._tooltip.scrollTop + this._tooltip.clientHeight) {
                this._tooltip.scrollTop = tipOffsetTop - this._tooltip.clientHeight + searchTips[this._tooltip.currentSelection].clientHeight
            }
            else if (tipOffsetTop <= this._tooltip.scrollTop) {
                this._tooltip.scrollTop = tipOffsetTop
            }
        }
    },

    _handleSubmit: function() {	// tooltip click and enter submit
        console.log('Hit _handleSubmit')
        this._hideAutoType()
        
        this.hideAlert()
        this._hideTooltip()

        var loc = this._getLocation(this._input.value)
        
        if(loc===false)
            this.showAlert()
        else
        {
            this.showLocation(loc, this._input.value)
            this.fire('search:locationfound', {
                    latlng: loc,
                    text: this._input.value,
                    layer: loc.layer ? loc.layer : null
                })
        }
    },

    _getLocation: function(key) {	//extract latlng from _recordsCache

        // eslint-disable-next-line no-prototype-builtins
        if( this._recordsCache.hasOwnProperty(key) )
            return this._recordsCache[key] //then after use .loc attribute
        else
            return false
    },

    _defaultMoveToLocation: function(latlng) {
        if(this.options.zoom)
            this._map.setView(latlng, this.options.zoom)
        else
            this._map.panTo(latlng)
    },

    showLocation: function(latlng, title) {	//set location on map from _recordsCache
        var self = this

        self._map.once('moveend zoomend', function() {

            if(self._markerSearch) {
                self._markerSearch.addTo(self._map).setLatLng(latlng)
            }
            
        })

        self._moveToLocation(latlng, title, self._map)
        if(self.options.autoCollapse)
            self.collapse()

        return self
    }
})

L.Map.addInitHook(function () {
    if (this.options.searchControl) {
        this.searchControl = L.control.search(this.options.searchControl)
        this.addControl(this.searchControl)
    }
})

var search = function (options) {
    return new Leaflet.Control.BespokeSearch(options)
  }

export { search }