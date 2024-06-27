export default {
    Map: {},
    Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: [
        
        // {
        //     key: 'No Waiting At Any Time',
        //     group: 'Traffic Regulation Orders',
        //     url: 'wms',
        //     visibleByDefault: false,
        //     layerOptions: {
        //         layers: 'highways:tro_no_waiting',
        //         key: {align: 'below'},
        //         popup: { 
        //             icon: 'fa fa-car',
        //             body: {
        //                 'Type': 'restriction'
        //             }
        //         }
        //     }
        // },
        {
            key: 'Smoke Control Areas',
            
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'climatology:smoke_control_defra',
                // key: {align: 'below'},
                popup: { 
                    icon: 'fas fa-smog',
                    body: {
                       'Code': 'code'
                    }
                }
            },
        }

    ]
}