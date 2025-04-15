const carparksStyle = {
    radius: 8,
    color: '#ffffff',
    weight: 2,
    opacity: 1,
    fillColor: '#3182bd',
    fillOpacity: 0.5
}
function freeStyle(feature) {
    
    return {
        
        radius: 8,
        color: '#ffffff',
        weight: 1,
        opacity: 1,
        fillColor: '#2E6F40',
        fillOpacity: 0.7
    }
}
function proposedStyle(feature) {
    
    return {
        
        radius: 8,
        color: '#ffffff',
        weight: 1,
        opacity: 1,
        fillColor: '#ff4d00',
        fillOpacity: 0.7
    }
}
function existingStyle(feature) {
    
    return {
        
        radius: 6,
        color: '#ffffff',
        weight: 1,
        opacity: 1,
        fillColor: '#3182bd',
        fillOpacity: 0.5
    }
}
export {
carparksStyle,
freeStyle,
proposedStyle,
existingStyle
}