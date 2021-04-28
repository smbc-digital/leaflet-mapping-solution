function getColor_gullies(d) {
    switch  (d) {   case 1    :
                        return '#33a02c'    
                    case 2    :
                        return '#ff7f00'
                    case 3    :
                        return '#e31a1c'    
                }
}
        
function gulliesStyle (feature) {
    return {
        fillColor: getColor_gullies (feature.properties.raise_new_job)
    }
}
        
export {
    gulliesStyle
}