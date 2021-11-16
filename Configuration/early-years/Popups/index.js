const FEC_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-users smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Family Education Cluster</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.family_education_cluster}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const HV_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-heartbeat smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Health Visitor Area</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const eyProviderPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-child smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">EY Provider</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.provider_name}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const childminderPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Childminder</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.provider_name}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

export {
  FEC_Popup,
  eyProviderPopup,
  childminderPopup,
  HV_Popup
}