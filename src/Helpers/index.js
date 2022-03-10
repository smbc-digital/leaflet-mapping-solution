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

const hexToRGB = function (hex, alpha) {
  if (hex === 'black') {
    return `rgba(0,0,0,${alpha})`
  }

  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

const generatesubKeys = (keyColors) => {
    var keys = {}
    for (const [key, value] of Object.entries(keyColors)) {
        keys[key] = `<svg width="18" height="18"><title>${key}</title><rect x="2" y="2" width="14" height="14" style="stroke:${hexToRGB(value,0.4)}; stroke-width: 3px; fill:${hexToRGB(value,0.4)}" /></svg>`
    }
    return keys
}

const generatePointKeys = (keyColors) => {
    var keys = {}
    for (const [key, value] of Object.entries(keyColors)) {
        keys[key] = `<svg width="18" height="18"><title>${key}</title><circle cx="9" cy="9" r="6" style="stroke:rgb(0,0,0,1); stroke-width: 3px; fill:${hexToRGB(value,0.4)}" /></svg>`
    }
    return keys
}

const generateLineKeys = (keyColors) => {
    var keys = {}
    for (const [key, value] of Object.entries(keyColors)) {
        keys[key] = 
        `<svg width="18" height="18"><title>${key}</title>
        <g
     id="layer1"
     transform="translate(0,-292.23747)">
    <path
       style="fill:none;stroke:${hexToRGB(value,1)};stroke-width:3px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 0.52916666,292.50205 c -0.0517961,-0.0559 4.46754004,4.83329 3.43958334,3.70417"
       id="path866" />
  </g></svg>`
    }
    return keys
}

const generateCustomKeys = (keyMaps) => {
    var keys = {}
    for (const [key, value] of Object.entries(keyMaps)) {
        keys[key] = value
    }
    return keys
}



export {
    fetchData,
    fetchAddressData,
    getQueryStringParams,
    hexToRGB,
    generatesubKeys,
    generateCustomKeys,
    generateLineKeys,
    generatePointKeys
}