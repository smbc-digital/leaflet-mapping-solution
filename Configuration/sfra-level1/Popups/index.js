const floodzone_2_popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Flood Zone 2</span>
    </div>
  </div>`

  layer.bindPopup(content)
}

const floodzone_3_popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Flood Zone 3</span>
    </div>
  </div>`

  layer.bindPopup(content)
}

const parliamentaryPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-address-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Parliamentary</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Parliamentary Constituency: ${feature.properties.name_short}</p>
      <p>MP: ${feature.properties.mp_name} (${feature.properties.mp_party})<br> 
    </div>
  </div>`

  layer.bindPopup(content)
}

const planningAppsPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Planning App</span>
    </div>
      <div class="smbc-map__item__body">
      <p>${properties.refval}</p>
      <p><a href="${properties.url}" target="_blank">Click for full details</a></p>
      <p>${properties.address}</p>
      <p>${properties.proposal}</p>
      <p>Decision: ${properties.decision}</p>
      <p>Decision date: ${properties.decision_date}</p>
    </div>
  </div>`
}

export {
  floodzone_2_popup,
  floodzone_3_popup,
  parliamentaryPopup,
  planningAppsPopup
}
