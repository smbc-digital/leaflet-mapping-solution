import Leaflet from 'leaflet'
import mapboxGL from 'mapbox-gl-leaflet' // eslint-disable-line no-unused-vars

const token =
  'pk.eyJ1IjoibWNpMDMzNTIiLCJhIjoiY2trd3I4NzJ3MWpsbjJ2cGx3bGdsazh6cCJ9.omrA6N5QfiZQ5FSjbZVn0A'

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
