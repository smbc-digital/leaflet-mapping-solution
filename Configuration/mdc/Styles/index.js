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

const TCW_10min_style = {
    color: '#0000FF',
    weight: 4,
    opacity: 1,
    fillColor: '#FF0000',
    fillOpacity: 0,
    dashArray: '5,10'
}

const TCW_500m_style = {
    color: '#FFA500',
    weight: 4,
    opacity: 1,
    fillColor: '#FF0000',
    fillOpacity: 0,
}

const TCW_1km_style = {
    color: '#00FF00',
    weight: 4,
    opacity: 1,
    fillColor: '#FF0000',
    fillOpacity: 0,
}

const TCL_style = {
    color: '#ffa500',
    weight: 0,
    opacity: 1,
    fillColor: '#ffa500',
    fillOpacity: 0.3
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

const schoolbuildingstyle = {
    color: '#800080',
    weight: 0,
    opacity: 1,
    fillColor: '#800080',
    fillOpacity: 0.3
}

const Assetsstyle = {
    color: '#006400',
    weight: 2,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}

const greenspace_style = {
    color: '#00ff00',
    weight: 0,
    opacity: 1,
    fillColor: '#00ff00',
    fillOpacity: 0.3
}

const parks_style = {
    color: '#3399ff',
    weight: 0,
    opacity: 1,
    fillColor: '#3399ff',
    fillOpacity: 0.3
}

const primary_catch_style = {
    color: '#000000',
    weight: 4,
    opacity: 1,
    fillColor: '#000000',
    fillOpacity: 0,
}

export {
    LandOwnershipstyle,
    BIDstyle,
    TCWstyle,
    carparkstyle,
    schoolbuildingstyle,
    Assetsstyle, 
    TCW_10min_style, 
    TCW_500m_style, 
    TCW_1km_style, 
    TCL_style, 
    greenspace_style, 
    parks_style, 
    primary_catch_style
}