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

export {
  OldWardpopup,
  REPopup
  
}
