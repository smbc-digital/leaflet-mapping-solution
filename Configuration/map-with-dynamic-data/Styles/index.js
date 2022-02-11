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
        color: '#000000',
        fillOpacity: 0.5
    }
}
const AthleticsTracksStyle = {
  color: '#000000',
  weight: 2,
  opacity: 1,
  fillColor: '#ff7f00',
  fillOpacity: .75
}
const TennisCourtsStyle = {
  color: '#000000',
  weight: 2,
  opacity: 1,
  fillColor: '#6a3d9a',
  fillOpacity: .75
}

export {
    LandOwnershipstyle,
    TennisCourtsStyle,
    AthleticsTracksStyle
}