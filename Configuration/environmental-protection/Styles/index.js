function getColor_smokecontrolarea(d) {
    switch  (d) {   case 'Smoke free zone - restrictions on the burning of domestic solid fuel'    :
                        return '#e31a1c'    
                    case 'smoke permitted zone - no restrictions in relation to the burning of solid fuel within domestic premisses'    :
                        return '#1f78b4' 
                }
    }
function smokecontrolareaStyle (feature) {
    return {
        color: getColor_smokecontrolarea (feature.properties.restrictions),
        weight: 2,
        opacity: 1,
        fillColor: getColor_smokecontrolarea (feature.properties.restrictions),
        fillOpacity: 0.25
    }
}
    
const greenbeltStyle = {
    color: '#b3de69',
    weight: 2,
    opacity: 1,
    fillColor: '#b3de69',
    fillOpacity: 0.25
}

const aqmaStyle = {
    color: '#6a3d9a',
    weight: 2,
    opacity: 0.25,
    fillColor: '#6a3d9a',
    fillOpacity: 0.25
}

export {
smokecontrolareaStyle,greenbeltStyle,aqmaStyle
}   