const Borough1kmStyle = {
    color: '#33a02c',
    weight: 0,
    opacity: 0,
    fillColor: '#33a02c',
    fillOpacity: 0
}

const TownCentreBoundaryStyle = {
    color: '#33a02c',
    weight: 1,
    opacity: 0.25,
    fillColor: '#33a02c',
    fillOpacity: 0.25
}

const MainTownCentreUseAreaStyle = {
    color: '#1b21e5',
    weight: 2,
    opacity: 1,
    fillColor: '#33a02c',
    fillOpacity: 0,
    dashArray: '7,7,7',
    dashOffset: '0'
}

const TownCentreCharacterAreasStyle = {
    color: '#e31a1c',
    weight: 2,
    opacity: 1,
    fillColor: '#e31a1c',
    fillOpacity: 0
}

const TownCentreLivingAreaStyle = {
    color: '#54278f',
    weight: 6,
    opacity: 1,
    fillColor: '#e31a1c',
    fillOpacity: 0
}

const PrimaryShoppingAreasStyle = {
    color: '#f768a1',
    weight: 2,
    opacity: 0,
    fillColor: '#f768a1',
    fillOpacity: 0.25
}

const DistrictCentresStyle = {
    color: '#ef6548',
    weight: 2,
    opacity: 1,
    fillColor: '#f768a1',
    fillOpacity: 0
}

function getColor_LocalCentres(d) {
    switch  (d) {   case 'LLC'    :
                        return '#fc8d59'    
                    case 'OLC'    :
                        return '#fdbb84'    
                }
    }
    function LocalCentresStyle (feature) {
    return {
        color: getColor_LocalCentres (feature.properties.type),
        weight: 2,
        opacity: 1,
        fillColor: getColor_LocalCentres (feature.properties.type),
        fillOpacity: 0
        }
    }

export {
    Borough1kmStyle,
    TownCentreBoundaryStyle,
    MainTownCentreUseAreaStyle,
    TownCentreCharacterAreasStyle,
    TownCentreLivingAreaStyle,
    PrimaryShoppingAreasStyle,
    DistrictCentresStyle,
    LocalCentresStyle
}