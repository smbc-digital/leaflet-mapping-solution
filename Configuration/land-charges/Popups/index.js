const pt2_misc_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pt2 - Misc</span>
</div>
<div class="smbc-map__item__body">
  <p>Description: ${feature.properties.description}</p>
  <p>Location: ${feature.properties.location}</p> 
  <p>Registered Date: ${feature.properties.date_registered}</p>
  <p>TLC Reference: ${feature.properties.tlc_ref}</p>
</div>
</div>`
    
    layer.bindPopup(content)
}

export {
  pt2_misc_Popup
}