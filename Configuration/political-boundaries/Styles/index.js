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
    let colour = '#fffffff'

    if (typeof feature.properties !== 'undefined')
    {
        colour = getColor_AreaCommittees(feature.properties.committee_name)
    }

    return {
        fillColor: colour,
        weight: 0,
        opacity: 0,
        color: '#000000',
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

const ParliamentaryBoundarystyle = {
    color: '#DC143C',
    weight: 2,
    opacity: 1,
    fillColor: '#bc80bd',
    fillOpacity: 0
}

export {
    AreaCommitteestyle,
    WardAreastyle,
    ParliamentaryBoundarystyle
}