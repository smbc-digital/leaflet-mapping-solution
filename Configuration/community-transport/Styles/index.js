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

const pathStyle = {
    color: '#E02DBC',
    weight: 4,
    opacity: 1,
    fillColor: '#3182bd',
    fillOpacity: 0,
    dashArray: '8,8,8',
    dashOffset: '0'
}

const speedLimitStyle = {
    color: '#e41a1c',
    weight: 2,
    opacity: 0.25,
    fillColor: '#FF0004',
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

    function getColor_structures(d) {
        switch 	(d) { 	case 'Bridge' : 
                            return '#ffff00'
                        case 'Culvert' : 
                            return '#ffaf5f'
                        case 'Footbridge' : 
                            return '#55ff55'
                        case 'Steps' : 
                            return '#d70000'
                        case 'Subway' : 
                            return '#15ebf6'
                        case 'Tunnel' : 
                            return '#000000'
                        case 'Other' : 
                            return '#000000'                   
                    }
                }
    
    function allstructuresStyle(feature) {
        return {
            radius: 6,
            color: '#000',
            weight: 2,
            opacity: 1,
            fillColor: getColor_structures(feature.properties.structure_type),
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
pathStyle,
taxiranksStyle,
carparksStyle,
wardAreastyle,
speedLimitStyle,
LandOwnershipstyle,
Leasesstyle,
adoptedhighwayStyle,
busStopsStyle,
allstructuresStyle
}