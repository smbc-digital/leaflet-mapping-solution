function getColour_gmal(d) {
    switch  (d) {   case 1    :
                        return '#d7191c'    
                    case 2    :
                        return '#ea633e'
                    case 3    :
                        return '#fdae61'
                    case 4    :
                        return '#fed791'
                    case 5    :
                        return '#ffffc0'
                    case 6    :
                        return '#d3ec95'
                    case 7    :
                        return '#a6d96a'
                    case 8    :
                        return '#60b855'
    

                }
    }

function gmalStyle (feature) {
return {
    color: '#000000',
    weight: 2,
    opacity: 0,
    fillColor: getColour_gmal (feature.properties.gmallevel),
    fillOpacity: 0.25
    }
}

function getColor_AreaCommittees(d) {
    switch 	(d) { 	case 'Corporate' : 
                        return '#ffff00'
                    case 'Education' : 
                        return '#ffaf5f'
                    case 'Greenspace' : 
                        return '#55ff55'
                    case 'Highways' : 
                        return '#3255ff'
                    case 'Social Services' :
                        return '#c88cff'
                    case 'Stockport Homes' : 
                        return '#d70000'
                    case 'Strategic Housing' : 
                        return '#15ebf6'
                    case 'Not Assigned' : 
                        return '#000000'
                    case 'Other' : 
                        return '#000000'                   
                }
            }
function landownershipStyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_new),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
        }
    }

const cfsStyle = {
    color: '#e31a1c',
    weight: 2,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}

const boundariesStyle = {
    color: '#1f78b4',
    weight: 3,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}

const boundaries800Style = {
    color: '#6a3d9a',
    weight: 3,
    opacity: 1,
    fillColor: '#6a3d9a',
    fillOpacity: 0.25
}

const nondevelopablesitesStyle = {
    color: '#ff454e',
    weight: 3,
    opacity: 1,
    fillColor: '#ff454e',
    fillOpacity: 0.5
}

const developablesitesStyle = {
    color: '#04c427',
    weight: 3,
    opacity: 1,
    fillColor: '#04c427',
    fillOpacity: 0.5
}

export {
}