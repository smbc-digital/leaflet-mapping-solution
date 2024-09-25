function getColor_pois(d) {
    switch  (d) {   case 'Venue'    :
                        return '#ef476f'
                    case 'Travel Hub'    :
                        return '#fed700'   
                    case 'Car Park'    :
                        return '#91ddcf'  
                    case 'After-Event Drinks'    :
                        return '#756ab6'
                }
    }

function poiStyle (feature) {
    return{
        radius: 8,
        color: '#000000',
        weight:1,
        opacity:1,
        fillColor: getColor_pois (feature.properties.category),
        fillOpacity: 0.6
    }
}

export {
poiStyle
}