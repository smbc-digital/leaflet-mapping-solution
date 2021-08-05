const planningappsStyle = {
    color: '#e31a1c',
    weight: 4,
    opacity: 1,
    fillColor: '#e31a1c',
    fillOpacity: 0.25
}

const buildingregsapprovalStyle = {
    color: '#08519c',
    weight: 2,
    opacity: 1,
    fillColor: '#2171b5',
    fillOpacity: 0.25
}

const buildingcertStyle = {
    color: '#7bccc4',
    weight: 4,
    opacity: 1,
    fillColor: '#a8ddb5',
    fillOpacity: 0.25
}

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

const adopted_highwaysStyle = {
    color: '#ce1256',
    weight: 2,
    opacity: 1,
    fillColor: '#ce1256',
    fillOpacity: 0.25,
}

const section38Style = {
    color: '#fed976',
    weight: 2,
    opacity: 1,
    fillColor: '#fed976',
    fillOpacity: 0.25,
}

const privatestreetworksStyle = {
    color: '#fd8d3c',
    weight: 2,
    opacity: 1,
    fillColor: '#fd8d3c',
    fillOpacity: 0.25,
}

const trunk200Style = {
    color: '#7a0177',
    weight: 2,
    opacity: 1,
    fillColor: '#ae017e',
    fillOpacity: 0.25,
}

const roadalterationsStyle = {
    color: '#238443',
    weight: 2,
    opacity: 1,
    fillColor: '#41ab5d',
    fillOpacity: 0.25,
}

const newroadStyle = {
    color: '#08306b',
    weight: 2,
    opacity: 1,
    fillColor: '#08519c',
    fillOpacity: 0.25,
}

const newroadconsultStyle = {
    color: '#4eb3d3',
    weight: 6,
    opacity: 1,
    fillColor: '#7bccc4',
    fillOpacity: 0.25,
}

const newrailwayStyle = {
    color: '#41b6c4',
    weight: 2,
    opacity: 1,
    fillColor: '#edf8b1',
    fillOpacity: 0.25,
}

const stoppingupStyle = {
    color: '#cb181d',
    weight: 2,
    opacity: 1,
    fillColor: '#ef3b2c',
    fillOpacity: 0.25,
}

const waitingStyle = {
    color: '#08306b',
    weight: 2,
    opacity: 1,
    fillColor: '#08519c',
    fillOpacity: 0.25,
}

const onewayStyle = {
    color: '#737373',
    weight: 2,
    opacity: 1,
    fillColor: '#bdbdbd',
    fillOpacity: 0.25,
}

const prohibitionofdrivingStyle = {
    color: '#a1d99b',
    weight: 2,
    opacity: 1,
    fillColor: '#c7e9c0',
    fillOpacity: 0.25,
}

const pedestrianisationStyle = {
    color: '#feb24c',
    weight: 2,
    opacity: 1,
    fillColor: '#fed976',
    fillOpacity: 0.25,
}

const widthweightStyle = {
    color: '#1d91c0',
    weight: 2,
    opacity: 1,
    fillColor: '#41b6c4',
    fillOpacity: 0.25,
}

const trafficcalmingStyle = {
    color: '#c6dbef',
    weight: 2,
    opacity: 1,
    fillColor: '#c6dbef',
    fillOpacity: 0.25,
}

const residentsparkingStyle = {
    color: '#2171b5',
    weight: 2,
    opacity: 1,
    fillColor: '#2171b5',
    fillOpacity: 0.25,
}

const minorroadalterationsStyle = {
    color: '#525252',
    weight: 2,
    opacity: 1,
    fillColor: '#737373',
    fillOpacity: 0.25,
}

//const pedestriancrossingStyle = {
//    color: '#d94801',
//    weight: 2,
//    opacity: 1,
//    fillColor: '#f16913',
//    fillOpacity: 0.25,
//}

const cycletrackStyle = {
    color: '#cb181d',
    dashArray: '15,15,15',
    weight: 2,
    opacity: 1,
    fillColor: '#ef3b2c',
    fillOpacity: 0.25,
}

const stopnoticeStyle = {
    color: '#00441b',
    weight: 2,
    opacity: 1,
    fillColor: '#006d2c',
    fillOpacity: 0.25,
}

const listbuildingenfStyle = {
    color: '#6a51a3',
    weight: 2,
    opacity: 1,
    fillColor: '#807dba',
    fillOpacity: 0.25,
}

const breachconditionStyle = {
    color: '#7f2704',
    weight: 2,
    opacity: 1,
    fillColor: '#a63603',
    fillOpacity: 0.25,
}

const planningcontraStyle = {
    color: '#081d58',
    weight: 2,
    opacity: 1,
    fillColor: '#253494',
    fillOpacity: 0.25,
}

const othernoticeStyle = {
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#3f007d',
    fillOpacity: 0.25,
}

const tpoStyle = {
    color: '#78c679',
    weight: 2,
    opacity: 1,
    fillColor: '#addd8e',
    fillOpacity: 0.25,
}

const radonStyle = {
    color: '#78c679',
    weight: 2,
    opacity: 1,
    fillColor: '#addd8e',
    fillOpacity: 0.25,
}

const cpoStyle = {
    color: '#78c679',
    weight: 2,
    opacity: 1,
    fillColor: '#addd8e',
    fillOpacity: 0.25,
}

const enforcementnoticeStyle = {
    color: '#78c679',
    weight: 2,
    opacity: 1,
    fillColor: '#addd8e',
    fillOpacity: 0.25,
}

export {
        planningappsStyle,
        buildingregsapprovalStyle, 
        buildingcertStyle,
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
        towncentreareasStyle, 
        adopted_highwaysStyle,
        section38Style,
        privatestreetworksStyle,
        trunk200Style,
        roadalterationsStyle,
        newroadStyle,
        newroadconsultStyle,
        newrailwayStyle,
        stoppingupStyle,
        waitingStyle,
        onewayStyle,
        prohibitionofdrivingStyle,
        pedestrianisationStyle,
        widthweightStyle,
        trafficcalmingStyle,
        residentsparkingStyle,
        minorroadalterationsStyle,
        //pedestriancrossingStyle
        cycletrackStyle,
        stopnoticeStyle,
        listbuildingenfStyle,
        breachconditionStyle,
        planningcontraStyle,
        othernoticeStyle,
        tpoStyle,
        radonStyle,
        cpoStyle,
        enforcementnoticeStyle
    }