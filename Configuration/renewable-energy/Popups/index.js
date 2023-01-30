const FitHydropopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">FiT Generation Hydro</span>
</div>
<div class="smbc-map__item__body">
  <p>LSOA: ${feature.properties.lower_layer_super_output_area}</p>
  <p>Total kW: ${feature.properties.kw}</p>
</div>
</div>`

  layer.bindPopup(content)
}

export {
  
}
