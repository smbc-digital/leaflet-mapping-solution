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
    fetch(`https://spatial.stockport.gov.uk/geoserver/wfs?request=getfeature&outputformat=json&typename=address:llpg_points&cql_filter=address%20ilike%27%25${rawSearchTerm}%25%27`)
        .then(res => res.clone().json())
        .then(response => {
            callResponse(response.features.map(item => {
                const address = item.properties.address.replace(/\r\n/g, ', ').toUpperCase().trim()
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

export {
    fetchData,
    fetchAddressData,
    getQueryStringParams
}