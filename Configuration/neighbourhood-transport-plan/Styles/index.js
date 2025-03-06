function getColour(d) {
    switch 	(d) { 	case 'Feasibility' : 
                        return '#FFA500'
                    case 'In dev' : 
                        return '#00ff00'
                                 
                }
            }

function BeEVStyle(feature) {
    console.log(getColour(feature.properties.status))
    return {
        fillColor: getColour(feature.properties.status),
        fillOpacity: 0.7,
        color: '#000000',
        weight: 1,
        opacity: 1,
        radius: 5
        }
    }

    function BeEVStyleInDev(feature) {
        console.log("color:" + getColour(feature.properties.status))
        return {
            fillColor: getColour(feature.properties.status),
            radius: 5,
            color: getColour(feature.properties.status),
        weight: 2,
        opacity: 1,
        fillColor: '#00ff00',
        fillOpacity: 0.5
            }
        }

        function BeEVStyleFeasibility(feature) {
            console.log("color:" + getColour(feature.properties.status))
            return {
                fillColor: getColour(feature.properties.status),
                radius: 5,
                color: getColour(feature.properties.status),
            weight: 2,
            opacity: 1,
            fillColor: '#FFA500',
            fillOpacity: 0.5
                }
            }
    

    function getColor_libraries(d) {
        switch  (d) {   case "open"    :
                            return '#1f78b4'    
                        case "opening soon"    :
                            return '#ff7f00'
    
                    }
        }
    
    function librariesStyle (feature) {
    return {
        radius: 4,
        color: '#000000',
        weight: 2,
        opacity: 1,
        fillColor: getColor_libraries (feature.properties.open),
        fillOpacity: 0.5
        }
    }

    const Article4_1_direction_style = {
        color: '#cab2d6',
        weight: 2,
        opacity: 1,
        fillColor: '#cab2d6',
        fillOpacity: 0.5
        }

        const lsoaMosaicStyle = {
            //fillColor: getColour(Feasibility),
            fillColor: '#666161',
                fillOpacity: 0.7,
                color: '#000000',
                weight: 1,
                opacity: 1,
                }
            

export {
    BeEVStyle,
    librariesStyle,
    Article4_1_direction_style,
    lsoaMosaicStyle,
    BeEVStyleInDev,
    BeEVStyleFeasibility
}