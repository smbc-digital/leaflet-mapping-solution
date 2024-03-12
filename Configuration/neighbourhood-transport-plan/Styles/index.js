function getColour(d) {
    switch 	(d) { 	case 'In dev' : 
                        return '#FFA500'
                    case 'Live' : 
                        return '#00ff00'
                                 
                }
            }

function BeEVStyle(feature) {
    return {
        fillColor: getColour(feature.properties.status),
        fillOpacity: 0.7,
        color: '#000000',
        weight: 1,
        opacity: 1,
        radius: 5
        }
    }

export {
    BeEVStyle
}