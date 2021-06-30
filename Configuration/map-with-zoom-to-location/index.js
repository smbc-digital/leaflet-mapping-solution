import Leaflet from 'leaflet'

export default {
    Map: {
        OnMapLoad: async (mapRef) => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());

            if (params.hasOwnProperty("lat") && params.hasOwnProperty("lng")) {
                const { lat, lng } = params;
                mapRef.current.setView([lat, lng], 18)
            }
        }
    },

    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja29jdWJ4MHIwMnczMnZsNHRtaWJkeHc2In0.W3-zhdnDhpyNX0AubRT--g'
    }
}