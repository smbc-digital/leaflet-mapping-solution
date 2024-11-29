import fetch from 'cross-fetch'
import Leaflet from 'leaflet'

const _popUp = (layer, properties) => {
  var popup = layer.layerOptions.popup

  if (typeof popup == 'function') {
    return popup(properties)
  }

  var icon = popup?.icon !== undefined ?
   `<i class="${popup.icon} smbc-map__item__header__block__icon" aria-hidden="true"></i>` 
   : ''

  var title = popup.title ?? layer.group !== undefined ? `${layer.group} - ${layer.key}` : layer.key

  var body = ''
  for (const [key, value] of Object.entries(popup.body)) {
    body += `<p>${key}: ${properties[value]}</p>`
  }

  return `<div class="smbc-map__item"><div class="smbc-map__item__header__block">${icon}<span class="smbc-map__item__header__block__title">${title}</span></div><div class="smbc-map__item__body">${body}</div></div>`
}

const toLegendOptions = (givenOptions, withoutTitle) => {
  var legendOptionsString = ''
  var possibleLegendOptions = {
    fontName: null, // Font to be used for rule titles. The font must be available on the server
    fontStyle: null, // 'italic' or 'bold'
    fontSize: null, // Font size for the various text elements. Default size is 12.
    fontColor: null, //  (hex) Set the color for the text of rules and labels
    fontAntiAliasing: null, // when true enables antialiasing for rule titles
    bgColor: null, // (hex) background color for the generated legend.
    dpi: null, //  Setting a DPI larger than 91 (the default) makes all fonts, symbols and line widths grow without changing the current scale, making it possible to get a high resolution version of the legend suitable for inclusion in printouts
    forceLabels: withoutTitle ? 'off' : null, // On/Off - adjust whether the title of the feature/layer is included.
    forceTitles: null, // On/Off - layer titles will not be drawn for layer groups.
    labelMargin: null, // margin (in pixels) to use between icons and labels.
    layout: withoutTitle ? 'horizontal' : null, // 'vertical' (default) or 'horizontal'
    columnheight: null, // Each column height is limited by the columnheight value (in pixels).
    rowwidth: null, // Each row width is limited by the rowwidth value (in pixels).
    columns: null, // enables multicolumn layout when layout is vertical.
    rows: null, // enables multirow layout when layout is horizontal.
    grouplayout: null, // 'horizontal' or 'vertical' = Orientation of groups of layer.
    hideEmptyRules: true, // When set to true hides rules that are not matching any feature
    wrap: null, // 'true' = word wraps long legend labels, leading to taller legends but less wide ones.
    wrap_limit: null // wraps the legend label with the specified number of pixels
  }

  var legendOptions = Object.assign(possibleLegendOptions, givenOptions)
  for (const [key, value] of Object.entries(legendOptions)) {
    if (value !== null) legendOptionsString += `${key}:${value};`
  }

  return legendOptionsString
}

const getFeatureInfo = (e, layer, bbox, x, y) => {
  // WMS : GetFeatureInfo 
  var point = e.containerPoint
  var url = `
  https://spatial.stockport.gov.uk/geoserver/wms?
  SERVICE=WMS
  &VERSION=1.1.1
  &REQUEST=GetFeatureInfo
  &LAYERS=${layer.layerOptions.layers}
  &STYLES=
  &SRS=EPSG:4326
  &BBOX=${bbox}
  &WIDTH=${x}
  &HEIGHT=${y}
  &QUERY_LAYERS=${layer.layerOptions.layers}
  &FEATURE_COUNT=50
  &X=${Math.round(point.x)}
  &Y=${Math.round(point.y)}
  &exclude_nodata_result=true
  &exceptions=application/json
  &INFO_FORMAT=application/json`
  
  return fetch(encodeURI(url.replace(/\s/g,'')))
    .then(response => response.json())
    .then(data => {

      // This click event is NOT within a layer space
      if (data.features === undefined || data.features.length === 0) {
        return null
      }

      // this click event IS on a layer
      if (!layer.layerOptions.popup.fetch) {
        // it DOES NOT have an external API call
        return data.features.map(feature => {
          feature.properties.latlng = e.latlng // add latlng to "properties"
          return _popUp(layer, feature.properties)
        }).join('<hr>')

      } else {
        // it DOES have an external API call - what data does it need...?
        return layer.layerOptions.popup.fetch({ latlng: e.latlng })
          .then((response) => response.json())
          .then((data) => {
            return data.features.map(feature => {
              feature.properties.latlng = e.latlng // add latlng to "properties"
              return _popUp(layer, feature.properties)
            }).join('<hr>')
        })
      }
    })
    .catch(error => console.error(error))
}

const swapLayers = (layerGroup, url, bbox, layerOptions) => {
  fetch(url.replace('{0}', bbox))
    .then(response => response.json())
    .then(data => {
      layerGroup.clearLayers()
      layerGroup.addLayer(Leaflet.geoJson(data, layerOptions))
    })
}

const loadLayer = (layerGroup, url, bbox, layerOptions) => {
  fetch(url.replace('{0}', bbox))
    .then(response => response.json())
    .then(data => layerGroup.addLayer(Leaflet.geoJson(data, layerOptions)))
}

const fetchData = async (url, layerOptions) => {
  const response = await fetchWithTimeout(url)
  const body = await response.json()
  return Leaflet.geoJson(body, layerOptions)
}

const fetchWithTimeout = (url, options, timeout = 10000) => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Timeout')), timeout)
        })
    ])
}

const fetchAddressData = (rawSearchTerm, callResponse) => {
  fetch(`https://api.os.uk/search/places/v1/find?query=${rawSearchTerm}&fq=local_custodian_code:4235&fq=CLASSIFICATION_CODE:R* CLASSIFICATION_CODE:R* CLASSIFICATION_CODE:C*&key=b8uAAAo0AA8nPPCO37NG0GPKw7g8w53G&dataset=LPI&output_srs=EPSG:4326`)
  .then(res => res.clone().json())
  .then(response => {
    callResponse(response.results.map(item => {
      const address = item.LPI.ADDRESS.replace(/\r\n/g, ', ').trim()
      var latlng = '[' + item.LPI.LAT + ',' + item.LPI.LNG + ']'
      let jsonLatLng = JSON.parse(latlng)
      return { 'loc': jsonLatLng, 'title': address }
    }))
  })
}

//const fetchAddressDataOLDSearch = (rawSearchTerm, callResponse) => {
//  fetch(`https://spatial.stockport.gov.uk/geoserver/wfs?request=getfeature&outputformat=json&typename=address:llpg_points&cql_filter=address_search%20ilike%27%25${rawSearchTerm}%25%27`)
//  .then(res => res.clone().json())
//  .then(response => {    
//    callResponse(response.features.map(item => {
//      const address = item.properties.address.replace(/\r\n/g, ', ').trim()      
//      return { 'loc': item.geometry.coordinates.reverse(), 'title': address }
//    }))
//  })
//}


const getQueryStringParams = query => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split('&')
            .reduce((params, param) => {
                let [key, value] = param.split('=')
                params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
                return params
            }, {}
            )
        : {}
}

const cssToSVG = style => {
  // https://www.w3.org/TR/SVG/styling.html
  var inlineStyle = ''

  inlineStyle += style.fillColor ? `fill:${style.fillColor};`: ''
  inlineStyle += style.fillOpacity >= 0 ? `fill-opacity:${style.fillOpacity};`: ''

  inlineStyle += style.color ? `stroke:${style.color};`: ''
  inlineStyle += style.weight ? `stroke-width:${style.weight};`: ''
  inlineStyle += style.opacity >= 0 ? `stroke-opacity:${style.opacity};`: ''

  inlineStyle += style.dashArray ? `stroke-dasharray:${style.dashArray};`: ''
  inlineStyle += style.dashOffset ? `stroke-dashoffset:${style.dashOffset};`: ''

  return inlineStyle
}

const svgSquare = style => {
  return svgElement(`<rect x="2" y="2" width="14" height="14" style="${typeof style === 'object' ? cssToSVG(style) : style}" />`)
}

const svgCircle = style => {
  return svgElement(`<circle cx="9" cy="9" r="6" style="${typeof style === 'object' ? cssToSVG(style) : style}" />`)
}

const svgPolyline = options => {
  var inlineStyle

  if (typeof options.style === 'object') {
    options.style.fillColor = 'none'
    inlineStyle = cssToSVG(options.style)
  } else {
    inlineStyle = options.style
  }

  return svgElement(`<polyline points="${options.points ?? '0 18,18 0'}" style="${inlineStyle}" />`)
}

const svgArray = options => {
  var array = ''
  for (var graphic of options.key.graphic) {
    var type = graphic.type ?? ( options.pointToLayer ? 'circle' : 'square' )
    var svgOptions = type === 'pline' ? { points: graphic?.points, style: graphic.style } : graphic.style
    array += `<div>${svgByType(type, svgOptions)}<span>${graphic.text}</span></div>`
  }
  return array
}

const svgByType = (type, options) => {
  switch (type) {
    case 'svg':
      return svgElement(options)

    case 'pline':
      return svgPolyline(options)

    case 'circle':
      return svgCircle(options)

    case 'square':
      return svgSquare(options)
  }
}

const keyByType = (type, options) => {
  switch (type) {
    case 'svg':
      return {
        align: options.key?.align ?? 'left',
        graphic: svgByType(type, options.key.graphic)
      }

    case 'array':
    case 'list':
      return {
        align: options.key?.align ?? 'below',
        graphic: svgArray(options)
      }

    case 'pline':
    case 'polyline':
      return {
        align: options.key?.align ?? 'left',
        graphic: svgByType('pline', { points: options.key?.points, style: options.style })
      }

    default:
      var circle = options.pointToLayer
      if (circle && !options.style) return // these need to be a custom built key
      if (typeof options.style == 'function') return // these need to be a custom built key
      return {
        align: options.key?.align ?? 'left',
        graphic: svgByType(circle ? 'circle' : 'square', options.style)
      }
  }
}

const svgElement = svg => `<svg width="18" height="18" class="smbc-control-layers__svg">${svg}</svg>`

export {
  getFeatureInfo,
  toLegendOptions,
  loadLayer,
  fetchData,
  fetchAddressData,
  getQueryStringParams,
  keyByType,
  swapLayers
}
