const grittingRouteColors = {
     'Trailer' : '#ffff99',
     'Supervisor' : '#6a3d9a',
     'Primary' : '#e31a1c',
     'Other' : '#33a02c'        
}

function getColor_grittingroutes(d) {
        return grittingRouteColors[d]
    }

    function grittingroutesStyle (feature) {
    return {
        color: getColor_grittingroutes (feature.properties.classification),
        weight: 4,
        opacity: 1,
        }
    }
    
    const gritBoxColors ={
        'highway': '#ff7f00',
        'car park': '#3f007d'
    }

    function getColor_gritboxes(d) {
        return gritBoxColors[d]
        }
    
    function gritboxesStyle (feature) {
        return {
            radius: 6,
            color: '#000',
            weight:2,
            opacity:1,
            fillColor: getColor_gritboxes (feature.properties.box_type),
            fillOpacity:1
        }
    }
    
    export {
    grittingRouteColors,
    grittingroutesStyle,
    gritBoxColors,
    gritboxesStyle
    }