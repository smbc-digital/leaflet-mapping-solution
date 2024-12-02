

function getColor_community(d) {
    switch  (d) {   case 'Stockport Homes'    :
                        return '#ff0000'    
                    case 'SMBC'    :
                        return '#00ff00'  
                    case 'Committee run'    :
                        return '#0000ff'
                }
    }

function communityStyle (feature) {
    return {
        radius: 10,
        color: '#000',
        weight:2,
        opacity:1,
        fillColor: getColor_community (feature.properties.managed_by),
        fillOpacity:1
    }
}
function getColor_libraries(d) {
    switch  (d) {   case "open"    :
                        return '#000000'    
                    case "opening soon"    :
                        return '#000000'

                }
    }

function librariesStyle (feature) {
return {
    radius: 6,
    color: '#ffffff',
    weight: 2,
    opacity: 1,
    fillColor: getColor_libraries (feature.properties.open),
    fillOpacity: 1
    }
}

const warmStyle = {
    radius: 10,
    color: '#e41a1c',
    weight: 2,
    opacity: 0.5,
    fillColor: '#e41a1c',
    fillOpacity: 0.5
}

const libraryStyle = {
    radius: 10,
    color: '#000000',
    weight: 2,
    opacity: 0.5,
    fillColor: '#FFFF00',
    fillOpacity: 0.5
}

export {
communityStyle,
librariesStyle,
libraryStyle,
warmStyle
}