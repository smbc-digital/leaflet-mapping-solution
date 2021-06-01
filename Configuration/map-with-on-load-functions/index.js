export default {
  Map: {
    DisplayBoundary: false,
    MapClickMinZoom: 10,
    OnMapClick: async () => (
      console.log('This has ran on click')
    ),
    OnMapLoad: async () => {
      console.log('This has ran on load')
    }
  },
  Tiles: {
    Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja29jdWJ4MHIwMnczMnZsNHRtaWJkeHc2In0.W3-zhdnDhpyNX0AubRT--g'
  }
}