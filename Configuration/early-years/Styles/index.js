function getColor_AreaCommittees(d) {
    switch 	(d) { 	case 'Heatons and Reddish' : 
                        return '#ffff00'
                    case 'Marple' : 
                        return '#ffaf5f'
                    case 'Offerton, Great Moor, Hazel Grove' : 
                        return '#55ff55'
                    case 'Werneth and Brinnington' : 
                        return '#3255ff'
                    case 'Bramhall' :
                        return '#c88cff'
                    case 'Cheadle' : 
                        return '#d70000'
                    case 'Edgeley' : 
                        return '#15ebf6'                  
                }
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
    FECstyle
}