function getColor_AreaCommittees(d) {
    switch (d) {
        case 'Corporate':
            return '#ffff00'
        case 'Education':
            return '#ffaf5f'
        case 'Greenspace':
            return '#55ff55'
        case 'Highways':
            return '#3255ff'
        case 'Social Services':
            return '#c88cff'
        case 'Stockport Homes':
            return '#d70000'
        case 'Strategic Housing':
            return '#15ebf6'
        case 'Not Assigned':
            return '#000000'
        case 'Other':
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


export {
    LandOwnershipstyle,
}