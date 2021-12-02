const land_charges_Style = {
        color: '#ff0000',
        weight: 2,
        opacity: 1,
        fillColor: '#ff0000',
        fillOpacity: 0.05
    }

const smoke_control_Style = {
    color: '#ff0000',
    weight: 2,
    opacity: 1,
    fillColor: '#ff0000',
    fillOpacity: 0
}


function getColor_old_wards(u) {
    switch (u) {
        case 'Active':
            return '#66ff33'
        case 'Revoked':
            return '#787878'        
    }
}

function tpo_Style(feature) {
    return {
        fillColor: getColor_old_wards(feature.properties.status),
        weight: 2,
        opacity: 1,
        color: '#ff0000',
        fillOpacity: 0.5
    }
}

export {
    land_charges_Style,
    smoke_control_Style,
    tpo_Style
}