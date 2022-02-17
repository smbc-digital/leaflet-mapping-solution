const Committees = {
    'Heatons and Reddish' : '#ffff00',
    'Marple' :  '#ffaf5f',
    'Offerton, Great Moor, HG' :  '#55ff55',
    'Werneth and Brinnington' : '#3255ff',
    'Bramhall' : '#c88cff',
    'Cheadle' : '#d70000',
    'Edgeley' : '#15ebf6'    
}

function getColor_AreaCommittees(d) {	
        return Committees[d]                 
}

function FECstyle(feature) {
    var fcolour = '#ffffff'
    if(typeof feature.properties !== 'undefined')
    {
        fcolour = getColor_AreaCommittees(feature.properties.family_education_cluster)
    }
    return {
        fillColor: fcolour,
        weight: 0,
        opacity: 0,
        color: '#000000',
        fillOpacity: 0.2
        }
    }


const Leasesstyle = {
        color: '#000000',
        weight: 2,
        opacity: 1,
        fillColor: '#000000',
        fillOpacity: 0
}

const HVstyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#000000',
    fillOpacity: 0
}
const Assetsstyle = {
    color: '#006400',
    weight: 2,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}

export {
    HVstyle,
    FECstyle,
    Committees
}