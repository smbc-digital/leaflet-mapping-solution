function getColor_jobstatus(d) {
    switch  (d) {   case 1    :
                        return '#33a02c'    
                    case 2    :
                        return '#ff7f00'
                    case 3    :
                        return '#e31a1c'    
                }
    }
    function jobstatusStyle (feature) {
        var colour = '#33a02c' 
        if(typeof feature.properties !== 'undefined')
        {
            colour = getColor_jobstatus(feature.properties.raise_new_job)
        }
        return {
            color: '#000000',
            weight: 2,
            opacity: 1,
            fillColor: colour,
            fillOpacity: 0.5
            }
    }
    
    export {
    jobstatusStyle
    }