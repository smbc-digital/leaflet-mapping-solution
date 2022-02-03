const underconstructionStyle = {
    color: '#FF0000',
    weight: 4,
    opacity: 1,
    fillColor: '#FF0000',
    fillOpacity: 0,
    dashArray: '5,10'
}

const prowStyle = {
    color: '#006d2c',
    weight: 4,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0,
    dashArray: '7,7,7',
    dashOffset: '0'
}

const speedLimitStyle = {
    color: '#e41a1c',
    weight: 2,
    opacity: 0.25,
    fillColor: '#e41a1c',
    fillOpacity: 0.25
}

const taxiranksStyle = {
    color: '#3182bd',
    weight: 2,
    opacity: 0.25,
    fillColor: '#FFFB00',
    fillOpacity: 0.75
}

const carparksStyle = {
    radius: 8,
    color: '#ffffff',
    weight: 2,
    opacity: 1,
    fillColor: '#3182bd',
    fillOpacity: 0.5
}

const busStopsStyle = {
    radius: 8,
    color: '#FFB0B1',
    weight: 2,
    opacity: 1,
    fillColor: '#ff0000',
    fillOpacity: 0.5
}

const wardAreastyle = {
    color: '#000000',
    weight: 5,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0
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

function LandOwnershipstyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_new),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
        }
    }

const Leasesstyle = {
        color: '#006400',
        weight: 2,
        opacity: 1,
        fillColor: '#006400',
        fillOpacity: 0
}

const adoptedhighwayStyle = {
    color: '#ce1256',
    weight: 1,
    opacity: 0,
    fillColor: '#ce1256',
    fillOpacity: 0.25
}

export {

underconstructionStyle,
prowStyle,
taxiranksStyle,
carparksStyle,
wardAreastyle,
speedLimitStyle,
LandOwnershipstyle,
Leasesstyle,
adoptedhighwayStyle,
busStopsStyle
}