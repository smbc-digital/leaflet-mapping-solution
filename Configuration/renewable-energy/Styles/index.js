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
        case 'Bredbury and Woodley':
            return '#fb8072'
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
        color: 'black',
        fillOpacity: 0.7
    }
}

const REpointsStyle = {
    radius: 10,
    color: '#e41a1c',
    weight: 2,
    opacity: 0.5,
    fillColor: '#e41a1c',
    fillOpacity: 0.5
}

const leisurecentresStyle = {
    radius: 6,
    color: '#d94801',
    weight: 2,
    opacity: 1,
    fillColor: '#f16913',
    fillOpacity: 0.5
}

export {
    REpointsStyle,
    OldWardstyle,
    leisurecentresStyle
}