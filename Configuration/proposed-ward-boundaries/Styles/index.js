function getColor_AreaCommittees(d) {
    switch (d) {
        case 'Marple North':
            return '#ffffb3'
        case 'Bredbury Green and Romiley':
            return '#bebada'
        case 'Bredbury and Woodley':
            return '#fb8072'
        case 'Brinnington and Central':
            return '#80b1d3'
        case 'Reddish South':
            return '#b3de69'
        case 'Reddish North':
            return '#fccde5'
        case 'Heatons South':
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

function getColor_old_wards(u) {
    switch (u) {
        case 'Bramhall North':
            return '#fb8072'
        case 'Bramhall South and Woodford':
            return '#bebada'
        case 'Bredbury and Woodley':
            return '#fb8072'
        case 'Bredbury Green and Romiley':
            return '#80b1d3'
        case 'Brinnington and Central':
            return '#b3de69'
        case 'Cheadle and Gatley':
            return '#fccde5'
        case 'Cheadle Hulme North':
            return '#ffed6f'
        case 'Cheadle Hulme South':
            return '#ffffb3'
        case 'Davenport and Cale Green':
            return '#bebada'
        case 'Edgeley and Cheadle Heath':
            return '#80b1d3'
        case 'Hazel Grove':
            return '#80b1d3'
        case 'Heald Green':
            return '#80b1d3'
        case 'Heatons North':
            return '#b3de69'
        case 'Heatons South':
            return '#fccde5'
        case 'Manor':
            return '#ffed6f'
        case 'Marple North':
            return '#fb8072'
        case 'Marple South and High Lane':
            return '#fccde5'
        case 'Offerton':
            return '#b3de69'
        case 'Reddish North':
            return '#fccde5'
        case 'Reddish South':
            return '#ffed6f'
        case 'Stepping Hill':
            return '#ffffb3'
    }
}

function OldWardstyle(feature) {
    return {
        fillColor: getColor_old_wards(feature.properties.ward_name),
        weight: 0.5,
        opacity: 0.7,
        color: '#000000',
        fillOpacity: 0.7
    }
}

function OldWard30style(feature) {
    return {
        fillColor: getColor_old_wards(feature.properties.ward_name),
        weight: 0.5,
        opacity: 0.7,
        color: '#000000',
        fillOpacity: 0.3
    }
}

const WardAreastyle = {
    color: '#000000',
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

export {
    AreaCommitteestyle,
    WardAreastyle,
    ParliamentaryBoundarystyle,
    OldWardstyle,
    OldWardOutlinestyle,
    OldWard30style
}