import fetch from 'cross-fetch'
import Leaflet from 'leaflet'

const fetchData = async (url, layerOptions, mapRef, isStaticLayer) => {
    var currentZoom = mapRef.getZoom()
    if (isStaticLayer || (currentZoom >= layerOptions.maxZoom && currentZoom <= layerOptions.minZoom)) {
        const response = await fetchWithTimeout(url)
        const body = await response.json()
        return Leaflet.geoJson(body, layerOptions)
    }
    return null
}

const fetchWithTimeout = (url, options, timeout = 10000) => {
    return Promise.race([
        fetch(url, options),
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Timeout')), timeout)
        })
    ])
}

const fetchAddressData = (rawSearchTerm, callResponse) => 
    fetch(`https://spatial.stockport.gov.uk/geoserver/wfs?request=getfeature&outputformat=json&typename=address:llpg_points&cql_filter=address_search%20ilike%27%25${rawSearchTerm}%25%27`)
    .then(res => res.clone().json())
        .then(response => {
            callResponse(response.features.map(item => {
                const address = item.properties.address.replace(/\r\n/g, ', ').trim()
                return { 'loc': item.geometry.coordinates.reverse(), 'title': address }
            }))
        })

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
  fetchData,
  fetchAddressData,
  getQueryStringParams,
  keyByType
}