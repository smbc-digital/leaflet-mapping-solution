const greenbeltPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Green Belt</span>
    </div>
  </div>`
}

const ecological_networks_corePopup = (properties) => {
  
    return `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Ecological Network - Core Area</span>
      </div>
    </div>`
   }

const ecological_networks_linearPopup = (properties) => {
  
   return `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Ecological Network - Linear Corridors</span>
      </div>
    </div>`
   }

   const Borough1kmPopup = (properties) => {
 
    return `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-map-pin smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Map point</span>
      </div>
      <div class="smbc-map__item__body">
        <p class="smbc-map__item__header__block__title">
        </p>
      </div>
      <button class="govuk-map-button govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" onclick="handleCommentButtonClick();" data-module="govuk-button">
      Make comment
    </button>`
   }

const open_space_sitesPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-picture-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Open Space Site</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Site name: ${properties.sitename}</p>
    </div>
  </div>`
}

const employment_areasPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-briefcase smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Employment Area</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${properties.id}</p>
    </div>
  </div>`
}

const out_of_centre_retailPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-cart-plus smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Out of Centre Retail Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Site name: ${properties.sitename}</p>
    </div>
  </div>`
 }

const tclaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Stockport Town Centre/Town Centre Living Area</span>
    </div>
  </div>`
}

const tc_character_areasPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Town Centre Character Area</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Area name: ${properties.area_name}</p>
  </div>
  </div>`
}

const other_local_centresPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-bag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Other Local Centre</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Centre: ${properties.centre}</p>
  </div>
  </div>`
}

const large_local_centresPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-basket smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Large Local Centre</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Centre: ${properties.centre}</p>
  </div>
  </div>`
}

const stockport_landscape_character_areasPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Landscape Character Area</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Area name: ${properties.policy_site}
    <p>Category: ${properties.lct_origin}</p>
  </div>
  </div>`
}

const primary_shopping_areasPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-bag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Shopping Areas</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Centre: ${properties.area}</p>
  </div>
  </div>`
}

const district_centresPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-cart smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">District Centre</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Centre: ${properties.area}</p>
  </div>
  </div>`
}

const main_town_centre_use_areaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-cart smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Main Town Centre Use Area</span>
    </div>
  </div>`
}

const housing_allocationsPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Housing Allocations</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Site Address: ${properties.site_address}</p>
      <p>Minimum Expected Number of Dwellings: ${properties.capacity}</p>
    </div>
  </div>`
}

const sbi_rigs_sitesPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-flask smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">SBI/RIGS Sites</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Type: ${properties.type}</p>
      <p>ID: ${properties.site_number}</p>
      <p>Site Name: ${properties.site_name}</p>
    </div>
  </div>`
}

const sssiPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-flask smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sites of Special Scientific Importance</span>
    </div>
    <div class="smbc-map__item__body">
      <p>SSSI name: ${properties.sssi_name}</p>
    </div>
  </div>`
}

const local_nature_reservePopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Local Nature Reserve</span>
    </div>
  </div>`
}

const aqmaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-envira smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Air Quality Management Area</span>
    </div>
  </div>`
}

const airport_consult_all_developmentPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport Consultation Zone - All Development</span>
    </div>
  </div>`
}

const airport_consult_15m_developmentPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport Consultation Zone - Development over 15m in height</span>
    </div>
  </div>`
}

const airport_consult_45m_developmentPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport Consultation Zone - Development over 45m in height</span>
    </div>
  </div>`
}

const airport_consult_90m_developmentPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport Consultation Zone - Development over 90m in height</span>
    </div>
  </div>`
}

const airport_consult_development_attracting_birdsPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport Consultation Zone - Development likely to attract birds</span>
    </div>
  </div>`
}

const windenergyPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-refresh smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Areas potentially suitable for wind energy</span>
    </div>
  </div>`
}

   const ecological_networks_stepping_stonesPopup = (feature, layer) => {
  
    const content = `<div class="smbc-map__item">
       <div class="smbc-map__item__header__block">
         <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
         <span class="smbc-map__item__header__block__title">EN - Stepping Stones</span>
       </div>
       <div class="smbc-map__item__body">
       </div>
     </div>`
    
  layer.bindPopup(content)
}
  
    const national_character_areasPopup = (feature, layer) => {
  
      const content = `<div class="smbc-map__item">
         <div class="smbc-map__item__header__block">
           <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
           <span class="smbc-map__item__header__block__title">National Character Areas</span>
         </div>
         <div class="smbc-map__item__body">
         <p>Name: ${feature.properties.jcaname}</p>
         </div>
       </div>`
      
       layer.bindPopup(content)
      }
      
const stc1_key_areas_of_changePopup = (properties) => {
 
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-refresh smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">STC1 - Key areas of change</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Area name: ${properties.site_name}</p>
      </p>
    </div>`
}

const groundwater_source_protection_zonePopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Groundwater Source Protection Zone</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Area name: ${properties.zone}</p>
      </p>
  </div>`
}

const airport_daytime_contours_2018Popup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport daytime noise contours</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Decibel Level: ${properties.decibels}</p>
      </p>
  </div>`
}

const airport_nighttime_contours_2018Popup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport nighttime noise contours</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Decibel Level: ${properties.decibels}</p>
      </p>
  </div>`
}

const resi_density_guidePopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Residential development density guide</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Dwellings per hectare: ${properties.density_dph}</p>
      <p>Location category: ${properties.location}</p>
      </p>
  </div>`
}

const eoc_primary_shopping_areasPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-thumbs-o-up smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Edge of Centre - Primary Shopping Area</span>
    </div>
  </div>`
}

const eoc_main_town_centre_use_areaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-thumbs-o-up smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Edge of Centre - Main Town Centre Use</span>
    </div>
  </div>`
}

const eoc_district_centresPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-thumbs-o-up smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Edge of Centre - District Centre</span>
    </div>
  </div>`
}

const eoc_large_local_centresPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-thumbs-o-up smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Edge of Centre - Large Local Centre</span>
    </div>
  </div>`
}

const eoc_other_local_centresPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-thumbs-o-up smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Edge of Centre - Other Local Centre</span>
    </div>
  </div>`
}

const flood_zonesPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Flood Risk ${properties.type}</span>
    </div>
  </div>`
}

const strategic_recreation_routesPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-ellipsis-h smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Strategic Recreation Routes</span>
    </div>
    <div class="smbc-map__item__body">
    <p>ID: ${properties.id}</p>
    </p>
  </div>`
}

const public_rights_of_wayPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Public Rights of Way</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Type: ${properties.type}</p>
    <p>Type: ${properties.row}</p>
    </p>
  </div>`
}

const a6_to_m60_protected_corridorPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">A6-M60 Protected Corridor</span>
    </div>
  </div>`
}

const brickclay_msaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-check-square smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Brickclay Mineral Safeguarding Area</span>
    </div>
  </div>`
}

const coal_msaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-check-square smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Coal Mineral Safeguarding Area</span>
    </div>
  </div>`
}

const sand_gravel_msaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-check-square smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sand and Gravel Mineral Safeguarding Area</span>
    </div>
  </div>`
}

const sandstone_msaPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-check-square smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sandstone Mineral Safeguarding Area</span>
    </div>
  </div>`
}

const sand_aosPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-check-circle-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sand Area of Search</span>
    </div>
  </div>`
}

const sandstone_aosPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-check-circle-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sandstone Area of Search</span>
    </div>
  </div>`
}

const stockport_areasPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-asterisk smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">GM Waste Plan - Stockport Areas</span>
    </div>
  </div>`
}

const stockport_sitesPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-asterisk smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">GM Waste Plan - Stockport Sites</span>
    </div>
  </div>`
}

const praPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Predominantly Residential Area</span>
    </div>
  </div>`
}

const local_green_spacePopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-pagelines smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Local Green Space</span>
    </div>
    <div class="smbc-map__item__body">
    <p>${properties.name}</p>
    </p>
  </div>`
}

const eoc_300mdistance_classePopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-shopping-bag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Edge of Centre 300m distance - Class E</span>
    </div>
  </div>`
}

const eoc_300mdistance_other_usesPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-building-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Edge of Centre 300m distance - Other Main town Centre Uses</span>
    </div>
  </div>`
}
      
  export {
    Borough1kmPopup,
    a6_to_m60_protected_corridorPopup, 
    airport_consult_all_developmentPopup,
    airport_consult_15m_developmentPopup,
    airport_consult_45m_developmentPopup,
    airport_consult_90m_developmentPopup,
    airport_consult_development_attracting_birdsPopup,
    airport_daytime_contours_2018Popup,
    airport_nighttime_contours_2018Popup,
    aqmaPopup,
    brickclay_msaPopup,
    coal_msaPopup,
    district_centresPopup,
    greenbeltPopup,
    ecological_networks_corePopup,
    ecological_networks_linearPopup,
    ecological_networks_stepping_stonesPopup,
    eoc_300mdistance_classePopup,
    eoc_300mdistance_other_usesPopup,
    employment_areasPopup,
    flood_zonesPopup,
    groundwater_source_protection_zonePopup,
    housing_allocationsPopup,
    stockport_landscape_character_areasPopup,
    local_green_spacePopup,
    large_local_centresPopup,
    local_nature_reservePopup,
    main_town_centre_use_areaPopup,
    national_character_areasPopup,
    other_local_centresPopup,
    open_space_sitesPopup,
    out_of_centre_retailPopup,
    praPopup,
    primary_shopping_areasPopup,
    public_rights_of_wayPopup,
    resi_density_guidePopup,
    sand_aosPopup,
    sandstone_aosPopup,
    sand_gravel_msaPopup,
    sandstone_msaPopup,
    sbi_rigs_sitesPopup,
    sssiPopup,
    stockport_areasPopup,
    stockport_sitesPopup,
    stc1_key_areas_of_changePopup,
    strategic_recreation_routesPopup,
    tclaPopup,
    tc_character_areasPopup,
    windenergyPopup
  }