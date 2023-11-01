function getColor_libraries(d) {
    switch  (d) {   case "open"    :
                        return '#FFFF00'    
                    case "opening soon"    :
                        return '#ff7f00'

                }
    }

function librariesStyle (feature) {
return {
    radius: 9,
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: getColor_libraries (feature.properties.open),
    fillOpacity: 0.5
    }
}

const warmStyle = {
    radius: 8,
    color: '#e41a1c',
    weight: 2,
    opacity: 0.5,
    fillColor: '#e41a1c',
    fillOpacity: 0.5
}

export {warmStyle,
    librariesStyle
    
}