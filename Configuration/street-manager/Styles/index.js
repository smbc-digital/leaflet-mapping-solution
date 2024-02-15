function getColourMosaic(d) {
    switch 	(d) { 	case 'City Prosperity' : 
                        return '#9978bb'
                    case 'Prestige Positions' : 
                        return '#4e4687'
                    case 'Country Living' : 
                        return '#006945'
                    case 'Rural Reality' : 
                        return '#00c445'
                    case 'Senior Security' : 
                        return '#918b83'
                    case 'Suburban Stability' : 
                        return '#004f8f'
                    case 'Domestic Success' : 
                        return '#00636f'
                    case 'Aspiring Homemakers' : 
                        return '#00b0a7'
                    case 'Family Basics' : 
                        return '#ef691d'
                    case 'Transient Renters' : 
                        return '#c3277d'
                    case 'Municipal Tenants' : 
                        return '#af2229'
                    case 'Vintage Value' : 
                        return '#8b5840'
                    case 'Modest Traditions' : 
                        return '#ff6161'
                    case 'Urban Cohesion' : 
                        return '#dfbc2e'
                    case 'Rental Hubs' : 
                        return '#907801'                
                }
            }

function lsoaMosaicStyle(feature) {
    return {
        fillColor: '#ff6161',
        fillOpacity: 0.7,
        color: '#000000',
        weight: 1,
        opacity: 1,
        }
    }

function householdMosaicStyle(feature) {
    return {
        fillColor: getColourMosaic(feature.properties.mosaic_household_group_name),
        fillOpacity: 0.7,
        color: '#000000',
        weight: 1,
        opacity: 1,
        radius: 5
        }
    }

export {
    lsoaMosaicStyle,
    householdMosaicStyle
}