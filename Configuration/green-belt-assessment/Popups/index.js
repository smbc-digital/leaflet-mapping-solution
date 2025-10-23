const developablesitesPopup = (feature, layer) => {
  
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Sites - Developable (SHLAA 2021)</span>
      </div>
      <div class="smbc-map__item__body">
        <p>Site Reference: ${feature.properties.site_reference}</p>
        <p>Site Address: ${feature.properties.site_address}</p>
        <p>Site Description: ${feature.properties.site_description_2020}</p>
        <p>Site Area (Ha): ${feature.properties.site_area}</p>
        <p>Est. Site Capacity: ${feature.properties.capacity}</p>
        <p>Est. Delivery Years: ${feature.properties.delivery_years}</p>
      </div>
    </div>`
   
    layer.bindPopup(content)
   }
  
   const tclaPopup = (feature, layer) => {
    
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Town Centre Living Area</span>
      </div>
      <div class="smbc-map__item__body">
      <p>Site Address: ${feature.properties.site_address}</p>
      <p>Site Description: ${feature.properties.site_description_2020}</p>
      <p>Site Area (Ha): ${feature.properties.site_area}</p>
      <p>Site Capacity: ${feature.properties.capacity}</p>
      <p>Delivery Years: ${feature.properties.delivery_years}</p>
      </div>
    </div>`
   
    layer.bindPopup(content)
   }
  
   const conservationPopup = (feature, layer) => {
    
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Conservation Area</span>
      </div>
      <div class="smbc-map__item__body">
        <p>Name: ${feature.properties.cons_area}</p>
      </div>
    </div>`
   
    layer.bindPopup(content)
   }
  
   const permissionedPopup = (feature, layer) => {
    
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Sites with planning permission for housing as of 31st March 2021</span>
      </div>
      <div class="smbc-map__item__body">
      <p>Site Reference: ${feature.properties.site_reference}</p>
      <p>Site Address: ${feature.properties.site_address}</p>
      <p>Site Area (Ha): ${feature.properties.site_area}</p>
      <p>Net Site Capacity remaining: ${feature.properties.net_capacity}</p>
      </div>
    </div>`
   
    layer.bindPopup(content)
   }
  
   const notassessedPopup = (feature, layer) => {
    
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Sites that did not pass initial sift (SHLAA 2020)</span>
      </div>
      <div class="smbc-map__item__body">
      <p>Site Reference: ${feature.properties.temp_id} (Working reference)</p>
      <p>Site Address: ${feature.properties.site_address}</p>
      <p>${feature.properties.website_map_text}</p>
      </div>
    </div>`
   
    layer.bindPopup(content)
   }
  
   const nondevelopablesitesPopup = (feature, layer) => {
    
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Sites - Not Developable (SHLAA 2020)</span>
      </div>
      <div class="smbc-map__item__body">
      <p>Site Reference: ${feature.properties.site_reference}</p>
      <p>Site Address: ${feature.properties.site_address}</p>
      <p>Site Description: ${feature.properties.site_description}</p>
      <p>Site Area (Ha): ${feature.properties.site_area}</p>
      <p>Notes: ${feature.properties.leaflet_summary}</p>
      </div>
    </div>`
   
    layer.bindPopup(content)
   }
  
   const allsitesPopup = (feature, layer) => {
    
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">All Sites Considered (SHLAA 2020)</span>
      </div>
      <div class="smbc-map__item__body">
      <p>Site Reference: ${feature.properties.site_reference}</p>
      </div>
    </div>`
  
    layer.bindPopup(content)
  }

  const tcwmdcPopup = (feature, layer) => {
    
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-building-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Town Centre West Mayoral Development Corporation Area</span>
      </div>`
  
    layer.bindPopup(content)
  }

  const sitesPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Site</span>
    </div>
      <div class="smbc-map__item__body">
      <p>Address: ${properties.id}</p>
      <p>Suitable for residential: ${properties.suitable_residential}</p>
      <p>Suitable for commercial: ${properties.suitable_commercial}</p>
      <p>Notes: ${properties.assessment_notes}</p>
      <p><a href="${properties.link}" target="_blank">Further details</a></p>

    </div>
  </div>`
}
  
  export {
    developablesitesPopup,
    conservationPopup,
    permissionedPopup,
    notassessedPopup,
    tclaPopup,
    nondevelopablesitesPopup,
    allsitesPopup,
    tcwmdcPopup,
    sitesPopup
  }