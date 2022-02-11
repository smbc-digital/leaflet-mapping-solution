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
        color: '#000000',
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
const Wardstyle = {
    color: '#5D3FD3',
    weight: 1,
    opacity: 1,
    fillColor: '#000000',
    fillOpacity: 0
}


export {
    AreaCommitteestyle,
    LSOAstyle,
    Policestyle,
    FECstyle,
    CCGstyle,
    Wardstyle,
    Placestyle
}