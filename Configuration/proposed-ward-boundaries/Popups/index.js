const wardPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker-alt smbc-map__item__header__block__icon"></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Ward: ${feature.properties.ward_name}</p>
      <p>Councillors: <br>
      ${feature.properties.cllr_1} (${feature.properties.cllr_1_party})<br> 
      ${feature.properties.cllr_2} (${feature.properties.cllr_2_party})<br> 
      ${feature.properties.cllr_3} (${feature.properties.cllr_3_party}) </p>
    </div>
  </div>`

  layer.bindPopup(content)
}

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

const NewWardpopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-address-book smbc-map__item__header__block__icon"></i>
      <span class="smbc-map__item__header__block__title">Proposed Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.ward_name}</p>
      <p>
      Current elecorate: ${feature.properties.current_electorate}<br> 
      Forecast electorate: ${feature.properties.forecast_electorate}<br> 
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

const polling_districtsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Polling District</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Name: ${feature.properties.polling_name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

export {
  OldWardpopup,
  NewWardpopup,
  wardPopup,
  area_committeePopup,
  parliamentaryPopup,
  polling_districtsPopup
}
