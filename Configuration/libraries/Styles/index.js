function getColor_libraries(d) {
    switch  (d) {   case "open"    :
                        return '#1f78b4'    
                    case "opening soon"    :
                        return '#ff7f00'

                }
    }

function librariesStyle (feature) {
return {
    radius: 6,
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: getColor_libraries (feature.properties.open),
    fillOpacity: 0.5
    }
}

export {
    librariesStyle
}