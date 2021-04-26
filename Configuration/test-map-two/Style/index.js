const airport_public_safety_zoneStyle = {
    color: '#000',
    weight: 2,
    opacity: 1,
    fillColor: '#252525',
    fillOpacity: 0.25
}

const ancientmonumentStyle = {
    color: '#cb181d',
    weight: 2,
    opacity: 1,
    fillColor: '#fb6a4a',
    fillOpacity: 0.25
}

const conservationareaStyle = {
    color: '#67000d',
    weight: 2,
    opacity: 1,
    fillColor: '#a50f15',
    fillOpacity: 0.25
}

const employmentareasStyle = {
    color: '#6a51a3',
    weight: 2,
    opacity: 1,
    fillColor: '#9e9ac8',
    fillOpacity: 0.25
}

const employmentproposedStyle = {
    color: '#feb24c',
    weight: 2,
    opacity: 1,
    fillColor: '#fed976',
    fillOpacity: 0.25
}

const prowStyle = {
    color: '#006d2c',
    weight: 4,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0,
    dashArray: '7,7,7',
    dashOffset: '0'
}

function getColor_floodzones(d) {
    switch  (d) {   case 'Zone2'    :
                        return '#8dd3c7'    
                    case 'Zone3'    :
                        return '#80b1d3'    
                }
    }

function floodzonesStyle (feature) {
return {
    color: getColor_floodzones (feature.properties.type),
    weight: 2,
    opacity: 1,
    fillColor: getColor_floodzones (feature.properties.type),
    fillOpacity: 0.25
    }
}

const greenbeltStyle = {
    color: '#b3de69',
    weight: 2,
    opacity: 1,
    fillColor: '#b3de69',
    fillOpacity: 0.25
}

const greenbeltmedsStyle = {
    color: '#e7298a',
    weight: 2,
    opacity: 1,
    fillColor: '#df65b0',
    fillOpacity: 0.25
}

const generalStyle = {
    color: '#737373',
    weight: 2,
    opacity: 1,
    fillColor: '#bdbdbd',
    fillOpacity: 0.25
}

const greenchainStyle = {
    color: '#00441b',
    weight: 2,
    opacity: 1,
    fillColor: '#006d2c',
    fillOpacity: 0.25
}

const gravel_aosStyle = {
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#525252',
    fillOpacity: 0.25
}

const housingsitesStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#fc9272',
    fillOpacity: 0.25
}

const landscapecharacterareaStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#fc9272',
    fillOpacity: 0
}

const localnaturereserveStyle = {
    color: '#41ab5d',
    weight: 2,
    opacity: 1,
    fillColor: '#74c476',
    fillOpacity: 0.25
}

const localopenspaceStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#41ab5d',
    fillOpacity: 0.25
}

const localwildlifesitesStyle = {
    color: '#006d2c',
    weight: 2,
    opacity: 1,
    fillColor: '#a1d99b',
    fillOpacity: 0.25
}

const metrolinkcorridorStyle = {
    color: '#d94801',
    weight: 2,
    opacity: 1,
    fillColor: '#f16913',
    fillOpacity: 0.25
}

const m60gatewaysitesStyle = {
    color: '#3f007d',
    weight: 2,
    opacity: 1,
    fillColor: '#fb6a4a',
    fillOpacity: 0.25
}

const parkgardenofhistoricinterestStyle = {
    color: '#d94801',
    weight: 2,
    opacity: 1,
    fillColor: '#fb6a4a',
    fillOpacity: 0
}

const pgasStyle = {
    color: '#fed976',
    weight: 2,
    opacity: 1,
    fillColor: '#fed976',
    fillOpacity: 0.25
}

const predominantlyresidentialStyle = {
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#737373',
    fillOpacity: 0.25
}

const reliefroadcorridorStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#737373',
    fillOpacity: 0
}

const sandaosStyle = {
    color: '#969696',
    weight: 2,
    opacity: 1,
    fillColor: '#969696',
    fillOpacity: 0.25
}

const sandgritaosStyle = {
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#969696',
    fillOpacity: 0.25
}

const shopfrontagesStyle = {
    color: '#08306b',
    weight: 2,
    opacity: 1,
    fillColor: '#969696',
    fillOpacity: 0.25
}

const shoppingtcStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#08519c',
    fillOpacity: 0.25
}

const shoppingareasStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#08519c',
    fillOpacity: 0.25
}

const sbiStyle = {
    color: '#00441b',
    weight: 2,
    opacity: 1,
    fillColor: '#74c476',
    fillOpacity: 0.25
}

const sssiStyle = {
    color: '#41ab5d',
    weight: 2,
    opacity: 1,
    fillColor: '#c7e9c0',
    fillOpacity: 0.25
}

const strategicopenspaceStyle = {
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#7bccc4',
    fillOpacity: 0.25
}

const strategicrecreationroutesStyle = {
    color: '#cb181d',
    weight: 2,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0,
    dashArray: '7,7,7',
    dashOffset: '0'
}

const towncentreareasStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#fe9929',
    fillOpacity: 0.25,
}

export {
        airport_public_safety_zoneStyle,
        ancientmonumentStyle,
        conservationareaStyle,
        employmentareasStyle,
        employmentproposedStyle,
        prowStyle,
        floodzonesStyle,
        greenbeltStyle,
        greenbeltmedsStyle,
        generalStyle,
        greenchainStyle,
        gravel_aosStyle,
        housingsitesStyle,
        landscapecharacterareaStyle,
        localnaturereserveStyle,
        localopenspaceStyle,
        localwildlifesitesStyle,
        metrolinkcorridorStyle,
        m60gatewaysitesStyle,
        parkgardenofhistoricinterestStyle,
        pgasStyle,
        predominantlyresidentialStyle,
        reliefroadcorridorStyle,
        sandaosStyle,
        sandgritaosStyle,
        shopfrontagesStyle,
        shoppingtcStyle,
        shoppingareasStyle,
        sbiStyle,
        sssiStyle,
        strategicopenspaceStyle,
        strategicrecreationroutesStyle,
        towncentreareasStyle
    }