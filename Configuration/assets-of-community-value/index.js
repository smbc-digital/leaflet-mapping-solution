import Leaflet from 'leaflet'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Assets of Community Value',
            url: 'wms',
            layerOptions: {
                layers: 'community:vw_assets_of_community_value',
                minZoom: 2,
                
                popup: {
                    icon: 'fa fa-users',
                    body: {
                        
                        Name: 'asset_name',
                        Decision: 'decision_date',
                        Expiry: 'listing_expiry_date'

                       /* 
                        Reference: 'ref',
                        Address: 'asset_address',
                        'Nominating organisation': 'nominating_organisation',
                        'Date nomination received': 'date_nomination_received',
                        
                        'Decision': 'decision',
                        'Decision Rationale': 'decision_rationale',
                        'Listing expiry date': 'listing_expiry_date',
                        'Status': 'status',
                        'Notification of intention to sell received': 'notification_of_intention_to_sell_received',
                        'Interim moratorium period': 'interim_moratorium_period',
                        'Intention to bid received': 'intention_to_bid_received',
                        'Name of community interest group': 'name_of_community_interest_group',
                        'Full moratorium end date': 'full_moratorium_end_date',
                        'Protection period end date': 'protection_period_end_date'
                        */
                    },

                    
                  },
            },

        },
        {
            key: 'Assets of Community Value - points',
            url: 'wms',
            layerOptions: {
                layers: 'community:assets_of_community_value_points',
                minZoom: 2
                
            },

        },
    ],
}

export default Configuration