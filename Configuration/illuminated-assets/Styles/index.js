const jobStatusColors = {
    1: '#33a02c',
    2: '#ff7f00',
    3: '#e31a1c'
}


function getColor_jobstatus(d) {
     return jobStatusColors[d]
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
    jobstatusStyle, jobStatusColors
    }