 const planappPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-map smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Tree Planning App</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Reference: ${feature.properties.refval}</p>
      <p>Proposal: ${feature.properties.proposal}</p>
      <p>Address: ${feature.properties.address}</p>
      <p>Received Date: ${feature.properties.received_date}</p>
      <p>Decision: ${feature.properties.decision}</p>
      <p>Decision Date: ${feature.properties.decision_date}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const wardPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker-alt smbc-map__item__header__block__icon" ></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Ward: ${properties.ward_name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

export {wardPopup}