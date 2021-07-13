import Leaflet from 'leaflet'
import Config from 'MapConfig'
import mapboxGL from 'mapbox-gl-leaflet' // eslint-disable-line no-unused-vars

const { Tiles: { Token } } = Config

const token = LOCAL_BASEMAP_AUTH_TOKEN ?? Token

const greyscale = Leaflet.mapboxGL({
  style: 'https://raw.githubusercontent.com/OrdnanceSurvey/OS-Vector-Tile-API-Stylesheets/master/OS_VTS_3857_Greyscale.json',
  id: 'mapbox.light',
  maxZoom: 20,
  transformRequest: url => transformRequest(url)
})

const os_open = Leaflet.mapboxGL({
  style: 'https://raw.githubusercontent.com/OrdnanceSurvey/OS-Vector-Tile-API-Stylesheets/master/OS_VTS_3857_Light.json',
  id: 'mapbox.os_open',
  maxZoom: 20,
  transformRequest: url => transformRequest(url)
})

const streetLayer = Leaflet.mapboxGL({
  style: 'https://raw.githubusercontent.com/OrdnanceSurvey/OS-Vector-Tile-API-Stylesheets/master/OS_VTS_3857_Open_Outdoor.json',
  id: 'mapbox.streets',
  maxZoom: 20,
  transformRequest: url => transformRequest(url)
})

const transformRequest = (url) => {
  if (! /[?&]key=/.test(url)) url += '?key=' + token
  return {
    url: url + '&srs=3857'
  }
}

export { greyscale, os_open, streetLayer }
