const polling_districts_v1Style = {
    color: '#F241B4',
    weight:3,
    opacity:1,
    fillColor: '#F241B4',
    fillOpacity:0
}
const NewWardOutlinestyle = {
    color: '#0000FF',
    weight: 3,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0
}
const OldWardOutlinestyle = {
    color: '#0000FF',
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

const polling_districtsStyle = {
    color: '#1f78b4',
    weight:3,
    opacity:1,
    fillColor: '#ccebc5',
    fillOpacity:0
}

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

export {
    polling_districtsStyle,
    polling_districts_v1Style,
    OldWardOutlinestyle,
    ParliamentaryBoundarystyle,
    NewWardOutlinestyle,
    AreaCommitteestyle
}