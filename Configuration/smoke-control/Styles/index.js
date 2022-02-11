function getColor_smokecontrolarea(d) {
    switch  (d) {   case 'Smoke free zone - restrictions on the burning of domestic solid fuel'    :
                        return '#e31a1c'    
                    case 'smoke permitted zone - no restrictions in relation to the burning of solid fuel within domestic premisses'    :
                        return '#1f78b4' 
                }
    }
function smokecontrolareaStyle (feature) {
    let colour = '#ffffff'
    if(typeof feature.properties !== 'undefined')
    {
        colour =  getColor_smokecontrolarea (feature.properties.restrictions)
    }
    console.log(colour)
    return {
        color: colour,
        weight: 2,
        opacity: 1,
        fillColor: colour,
        fillOpacity: 0.25
    }
}
    
export {
smokecontrolareaStyle
}   