import { fetchData } from '../Helpers'

const setDynamicLayers = async (DynamicData, WMSLayerGroup, DynamicLayerGroup, mapRef) => {
    if (DynamicData !== undefined) {
        const layers = {}
        await Promise.all(
            DynamicData.map(async layer => {
                if (layer.url.endsWith('wms?')) {
                    WMSLayerGroup[layer.key] = layer
                } else {
                    const url = layer.url.replace(
                        '{0}',
                        mapRef.getBounds().toBBoxString()
                    )
                    const newLayer = await fetchData(url, layer.layerOptions, mapRef, false)
                    layers[layer.key] = newLayer
                }
            })
        )

        Object.keys(DynamicLayerGroup).map(layer => {
            DynamicLayerGroup[layer].clearLayers()
            if (layers[layer] !== undefined && layers[layer] !== null) {
                DynamicLayerGroup[layer].addLayer(layers[layer])
            }
        })
    }
}

export { setDynamicLayers }