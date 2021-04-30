import Leaflet from 'leaflet'
import Config from 'MapConfig'
import mapboxGL from 'mapbox-gl-leaflet' // eslint-disable-line no-unused-vars

const { Tiles: { Token } } = Config

const token = Token

const greyscale = Leaflet.mapboxGL({
  style: 'mapbox://styles/mci03352/cknso3pxf0gbj17upxempq9rn',
  accessToken: token,
  id: 'mapbox.light',
  maxZoom: 20
})

const os_open = Leaflet.mapboxGL({
  style: 'mapbox://styles/mci03352/cknso3pxf0gbj17upxempq9rn',
  accessToken: token,
  id: 'mapbox.os_open',
  maxZoom: 20
})

const streetLayer = Leaflet.mapboxGL({
  style: 'mapbox://styles/mci03352/cknso3pxf0gbj17upxempq9rn',
  accessToken: token,
  id: 'mapbox.streets',
  maxZoom: 20
})

export { greyscale, os_open, streetLayer }
