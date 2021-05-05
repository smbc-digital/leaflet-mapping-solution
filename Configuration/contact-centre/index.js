import { prowPopup,tpoPopup,Land_Ownership_Popup, grittingroutesPopup } from './Popups'
import { prowStyle, tpoStyle, proposedtpoStyle, revokedtpoStyle, LandOwnershipstyle, adopted_highwaysStyle, grittingroutesStyle } from './Styles'

export default {
    Map: {
        Latitude: 53.39205825732247,
        Longitude: -2.1383008755576998,
        StartingZoom: 17
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja2xxcTUzZGUxZml1MnFxeTNidmt5c3kyIn0.QOsaZ7uPj4Kv2lwL63Crlg'
    },
    DynamicData: 
    [
        {
            key: 'Council Owned Land',
            typeName: 'land_ownership:council_owned_land',
            layerOptions: {
                onEachFeature: Land_Ownership_Popup,
                style: LandOwnershipstyle
            },
            visibleByDefault: false
        },
        {
            key: 'Public Rights of Way',
            typeName: 'highways:public_rights_of_way',
            layerOptions: {
                onEachFeature: prowPopup,
                style: prowStyle
            },
            visibleByDefault: false 
        },
        {
            key: 'Adopted Highways',
            typeName: 'con29:2_1a',
            layerOptions: {
                style: adopted_highwaysStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Preservation Orders',
            typeName: 'trees:tpo_merged',
            layerOptions: {
                onEachFeature: tpoPopup,
                style: tpoStyle
            },
            visibleByDefault: false
        },
        {
            key: 'TPO - Proposed',
            typeName: 'trees:tpo_proposed',
            layerOptions: {
                onEachFeature: tpoPopup,
                style: proposedtpoStyle
            },
            visibleByDefault: false
        },
        {
            key: 'TPO - Revoked',
            typeName: 'trees:tpo_revoked',
            layerOptions: {
                onEachFeature: tpoPopup,
                style: revokedtpoStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Gritting Routes',
            typeName: 'highway_assets:gritting_routes',
            layerOptions: {
                onEachFeature: grittingroutesPopup,
                style: grittingroutesStyle
            },
            visibleByDefault: false
        }
    ]
}