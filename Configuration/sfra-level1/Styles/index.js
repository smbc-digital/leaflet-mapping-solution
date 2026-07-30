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
    fzccStyle,
    floodzone2_style,
    floodzone3_style
}