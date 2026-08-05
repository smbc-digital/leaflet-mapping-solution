const wardPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker-alt smbc-map__item__header__block__icon" ></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Ward: ${properties.ward_name}</p>
      <p>Councillors: <br>
      ${properties.cllr_1} (${properties.cllr_1_party})<p> 
      ${properties.cllr_2} (${properties.cllr_2_party})<p> 
      ${properties.cllr_3} (${properties.cllr_3_party}) </p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const area_committeePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Area Committee</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Area Committee: ${feature.properties.committee_name}</p>
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
      <i class="fa fa-house smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Planning Application</span>
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
  wardPopup,
  area_committeePopup,
  parliamentaryPopup,
  planningAppsPopup
}
