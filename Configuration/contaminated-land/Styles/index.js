function AreaCommitteestyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_name),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
    }
}

export {
    AreaCommitteestyle
}