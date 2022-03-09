
const AreaCommitteeColors = {
    'Bramhall and Cheadle Hulme South':'#ffffb3',
    'Cheadle': '#bebada',
    'Stockport Central':'#fb8072',
    'Werneth': '#80b1d3',
    'Heatons and Reddish': '#b3de69',
    'Marple': '#fccde5',
    'Stepping Hill': '#ffed6f'
}

function getColor_AreaCommittees(d) {
    return  AreaCommitteeColors[d]
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
    AreaCommitteeColors,
    AreaCommitteestyle,
    WardAreastyle,
    ParliamentaryBoundarystyle
}