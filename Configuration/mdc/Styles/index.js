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
function LandOwnershipstyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_new),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
        }
    }

const TCWstyle = {
    color: '#FF0000',
    weight: 4,
    opacity: 1,
    fillColor: '#FF0000',
    fillOpacity: 0,
    dashArray: '5,10'
}

const BIDstyle = {
    color: '#ffa500',
    weight: 0,
    opacity: 1,
    fillColor: '#ffa500',
    fillOpacity: 0.3
}

const carparkstyle = {
    color: '#3399ff',
    weight: 0,
    opacity: 1,
    fillColor: '#3399ff',
    fillOpacity: 0.3
}

const Assetsstyle = {
    color: '#006400',
    weight: 2,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}

export {
    LandOwnershipstyle,
    BIDstyle,
    TCWstyle,
    carparkstyle,
    Assetsstyle
}