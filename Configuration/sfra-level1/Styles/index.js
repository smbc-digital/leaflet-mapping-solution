function getColor_AreaCommittees(d) {
    switch (d) {
        case 'Bramhall and Cheadle Hulme South':
            return '#ffffb3'
        case 'Cheadle':
            return '#bebada'
        case 'Stockport Central':
            return '#fb8072'
        case 'Werneth':
            return '#80b1d3'
        case 'Heatons and Reddish':
            return '#b3de69'
        case 'Marple':
            return '#fccde5'
        case 'Stepping Hill':
            return '#ffed6f'
    }
}

function AreaCommitteestyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_name),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
    }
}

const WardAreastyle = {
    color: '#000000',
    weight: 5,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0
}

const floodzone2_style = {
    color: '#a2d3ee',
    weight: 0.5,
    opacity: 1,
    fillColor: '#a2d3ee',
    fillOpacity: 1
}

const floodzone3_style = {
    color: '#3694bb',
    weight: 1,
    opacity: 1,
    fillColor: '#3694bb',
    fillOpacity: 1
}

export {
    AreaCommitteestyle,
    WardAreastyle,
    floodzone2_style,
    floodzone3_style
}