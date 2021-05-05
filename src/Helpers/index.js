import fetch from 'cross-fetch'
import Leaflet from 'leaflet'

let target_url

const getTargetUrl = () => {
    if(!target_url){
        target_url = generateTargetUrl()
    }

    return target_url
}

const generateTargetUrl = () => {
    if (window.location.hostname.includes('localhost')) {
        return  'http://localhost:57726'
    }
    else if (window.location.hostname.includes('int'))
    {
        return  'https://int-dts.smbcdigital.net'
    }
    else if (window.location.hostname.includes('qa'))
    {
        return  'https://qa-dts.smbcdigital.net'
    }
    else if (window.location.hostname.includes('staging'))
    {
        return  'https://stage-dts.smbcdigital.net'
    }
    else if (window.location.hostname.includes('myaccount'))
    {
        return  'https://myaccount.stockport.gov.uk'
    }
}

const fetchData = async (url, layerOptions, map) => {
    if (map.getZoom() > layerOptions.maxZoom) {
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

export {
    fetchData,
    fetchAddressData,
    getTargetUrl
}