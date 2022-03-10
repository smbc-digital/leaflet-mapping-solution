const AreaCommittees = {
    'Corporate' : '#ffff00',
    'Education' : '#ffaf5f',
    'Greenspace' : '#55ff55',
    'Highways' : '#3255ff',
    'Social Services' : '#c88cff',
    'Stockport Homes' : '#d70000',
    'Strategic Housing' : '#15ebf6',
    'Not Assigned' :  '#000000',
    'Other' : '#000000'
}

function getColor_AreaCommittees(d) {
    return AreaCommittees[d]
}

function LandOwnershipstyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_new),
        weight: 0,
        opacity: 0,
        color: '#000000',
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
const Assetsstyle = {
    color: '#006400',
    weight: 2,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}

export {
    AreaCommittees,
    LandOwnershipstyle,
    Leasesstyle,
    Assetsstyle
}