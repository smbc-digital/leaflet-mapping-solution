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
      <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show()" data-module="govuk-button">
        Make a comment
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
      <span class="smbc-map__item__header__block__title">Town Centre Living Area</span>
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
      <span class="smbc-map__item__header__block__title">Landscape Character Areas - Stockport</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Area name: ${properties.policysite}
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

const playing_pitch_strategy_pointsPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-futbol smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Playing Pitch Strategy</span>
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

   const ecological_networks_stepping_stonesPopup = (properties) => {
  
    const content = `<div class="smbc-map__item">
       <div class="smbc-map__item__header__block">
         <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
         <span class="smbc-map__item__header__block__title">Ecological Network - Stepping Stones</span>
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
      
  export {
    aqmaPopup,
    greenbeltPopup,
    district_centresPopup,
    ecological_networks_corePopup,
    ecological_networks_linearPopup,
    open_space_sitesPopup,
    employment_areasPopup,
    ecological_networks_stepping_stonesPopup,
    groundwater_source_protection_zonePopup,
    housing_allocationsPopup,
    stockport_landscape_character_areasPopup,
    large_local_centresPopup,
    local_nature_reservePopup,
    main_town_centre_use_areaPopup,
    national_character_areasPopup,
    other_local_centresPopup,
    out_of_centre_retailPopup,
    playing_pitch_strategy_pointsPopup,
    primary_shopping_areasPopup,
    sbi_rigs_sitesPopup,
    sssiPopup,
    stc1_key_areas_of_changePopup,
    tclaPopup,
    tc_character_areasPopup,
    windenergyPopup,
    airport_consult_all_developmentPopup,
    airport_consult_15m_developmentPopup,
    airport_consult_45m_developmentPopup,
    airport_consult_90m_developmentPopup,
    airport_consult_development_attracting_birdsPopup,
    airport_daytime_contours_2018Popup,
    airport_nighttime_contours_2018Popup,
    resi_density_guidePopup,
    Borough1kmPopup

  }