const OldWardpopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-crop-alt smbc-map__item__header__block__icon"></i>
      <span class="smbc-map__item__header__block__title">Current Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.ward_name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const REPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-sun smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Renewable Energy Planning Application</span>
</div>
<div class="smbc-map__item__body">
  <p>Reference: ${feature.properties.refval}</p>
  <p>Address: ${feature.properties.address}</p>
  <p>Date Granted: ${feature.properties.decision_date}</p>
  <p>Proposal: ${feature.properties.proposal}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const FitPVpopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-bolt smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">FiT Generation Photovoltaic</span>
</div>
<div class="smbc-map__item__body">
  <p>LSOA: ${feature.properties.lsoa}</p>
  <p>Number of Generators: ${feature.properties.no_sum}</p>
  <p>Total kW: ${feature.properties.kw_sum}</p>
</div>
</div>`

  layer.bindPopup(content)
}

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
  OldWardpopup,
  REPopup,
  FitHydropopup,
  FitPVpopup
  
}
