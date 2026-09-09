function getColor_AreaCommittees(d) {
    switch (d) {
        case 'Bramhall and Cheadle Hulme South':
            return '#b3de69'
        case 'Cheadle':
            return '#bebada'
        case 'Stockport Central':
            return '#fb8072'
        case 'Werneth':
            return '#80b1d3'
        case 'Heatons and Reddish':
            return '#ffff00'
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
const FECstyle = {
        color: '#FF0000',
        weight: 3,
        opacity: 1,
        fillColor: '#006400',
        fillOpacity: 0
}
const Policestyle = {
    color: '#0000FF',
    weight: 3,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}
const CCGstyle = {
    color: '#006400',
    weight: 3,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}
const Placestyle = {
    color: '#AA336A',
    weight: 3,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}
const LSOAstyle = {
    color: '#000000',
    weight: 1,
    opacity: 1,
    fillColor: '#000000',
    fillOpacity: 0
}
const MSOAstyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#000000',
    fillOpacity: 0
}
const Wardstyle = {
    color: '#5D3FD3',
    weight: 1,
    opacity: 1,
    fillColor: '#000000',
    fillOpacity: 0
}
const WardAreastyle = {
    color: '#000000',
    weight: 3,
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

const gpBramhallStyle = {
        radius: 6,
        color: '#000',
        weight:1,
        opacity:1,
        fillColor: '#ff0000',
        fillOpacity:1
}
const gpCheadleStyle = {
    radius: 6,
    color: '#000',
    weight:1,
    opacity:1,
    fillColor: '#00ff00',
    fillOpacity:1
}
const gpHazelStyle = {
    radius: 6,
    color: '#000',
    weight:1,
    opacity:1,
    fillColor: '#0000ff',
    fillOpacity:1
}
const gpHeatonsStyle = {
    radius: 6,
    color: '#000',
    weight:1,
    opacity:1,
    fillColor: '#ffff00',
    fillOpacity:1
}
const gpTameStyle = {
    radius: 6,
    color: '#000',
    weight:1,
    opacity:1,
    fillColor: '#990099',
    fillOpacity:1
}
const gpVictoriaStyle = {
    radius: 6,
    color: '#000',
    weight:1,
    opacity:1,
    fillColor: '#66ccff',
    fillOpacity:1
}
const gpWernethStyle = {
    radius: 6,
    color: '#000',
    weight:1,
    opacity:1,
    fillColor: '#000000',
    fillOpacity:1
}

export {
    AreaCommitteestyle,
    LSOAstyle,
    MSOAstyle,
    Policestyle,
    FECstyle,
    CCGstyle,
    Wardstyle,
    Placestyle,
    WardAreastyle,
    ParliamentaryBoundarystyle,
    gpBramhallStyle, gpCheadleStyle, gpHazelStyle, gpHeatonsStyle, gpTameStyle, gpVictoriaStyle, gpWernethStyle
}