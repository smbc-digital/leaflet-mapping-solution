function getColour(d) {
    switch (d) {
        case 'Feasibility':
            return '#FFA500'
        case 'In dev':
            return '#00ff00'

    }
}

function BeEVStyle(feature) {
    return {
        fillColor: getColour(feature.properties.status),
        fillOpacity: 0.7,
        color: '#000000',
        weight: 1,
        opacity: 1,
        radius: 5
    }
}

function BeEVStyleInDev(feature) {
    console.log("color:" + getColour(feature.properties.status))
    return {
        fillColor: getColour(feature.properties.status),
        radius: 5,
        color: getColour(feature.properties.status),
        weight: 2,
        opacity: 1,
        fillColor: '#00ff00',
        fillOpacity: 0.5
    }
}

function BeEVStyleFeasibility(feature) {
    console.log("color:" + getColour(feature.properties.status))
    return {
        fillColor: getColour(feature.properties.status),
        radius: 5,
        color: getColour(feature.properties.status),
        weight: 2,
        opacity: 1,
        fillColor: '#FFA500',
        fillOpacity: 0.5
    }
}

export {
    BeEVStyleInDev,
    BeEVStyle,
    BeEVStyleFeasibility
}