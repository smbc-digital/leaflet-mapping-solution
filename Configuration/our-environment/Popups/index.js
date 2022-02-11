const ecological_networks_corePopup = (feature, layer) => {
  
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Sites - Developable (SHLAA 2020)</span>
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

  
  export {
    ecological_networks_corePopup
  }