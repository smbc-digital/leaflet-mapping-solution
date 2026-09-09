function rofrsfuturehighStyle(feature) {
    return {
        fillColor: '#984696',
        weight: 0,
        opacity: 1,
        color: '#984696',
        fillOpacity: 1
    }
}

function rofrsfuturemediumStyle(feature) {
    return {
        fillColor: '#d562d2',
        weight: 0,
        opacity: 1,
        color: '#d562d2',
        fillOpacity: 1
    }
}

function rofrsfuturelowStyle(feature) {
    return {
        fillColor: '#ecbeeb',
        weight: 0,
        opacity: 1,
        color: '#ecbeeb',
        fillOpacity: 1
    }
}

function rofrsfutureStyle (feature) {
 return getstyle_rofrsfuture(feature)

}

const getstyle_rofrsfuture = feature=> {
    switch (feature.properties.risk_band){
        case 'High':
            return rofrsfuturehighStyle(feature)
        case 'Medium':
            return rofrsfuturemediumStyle(feature)
        case 'Low':
            return rofrsfuturelowStyle(feature)
    }

}

function fzccunavailableStyle(feature) {
    return {
        fillColor: '#ffffb3',
        weight: 2,
        opacity: 1,
        color: '#fff100',
        fillOpacity: 0
    }
}

function fzccavailableStyle(feature) {
    return {
        fillColor: '#ff7f00',
        weight: 1,
        opacity: 1,
        color: '#ff7f00',
        fillOpacity: 1
    }
}

function fzccStyle (feature) {
 return getstyle_fzcc(feature)

}

const getstyle_fzcc = feature=> {
    switch (feature.properties.type){
        case 'Unavailable':
            return fzccunavailableStyle(feature)
        case 'Flood Zones plus climate change':
            return fzccavailableStyle(feature)
    }

}

const floodzone2_style = {
    color: '#a2d3ee',
    weight: 0.5,
    opacity: 1,
    fillColor: '#a2d3ee',
    fillOpacity: 1
}

const floodzone3_style = {
    color: '#3694bb',
    weight: 0.5,
    opacity: 1,
    fillColor: '#3694bb',
    fillOpacity: 1
}

export {
    rofrsfutureStyle,
    fzccStyle,
    floodzone2_style,
    floodzone3_style
}