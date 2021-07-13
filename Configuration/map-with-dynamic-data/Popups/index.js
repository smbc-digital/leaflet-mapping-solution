const Land_Ownership_Popup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Land Ownership</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Committee: ${feature.properties.committee_new}</p>
    <p>Title Number: ${feature.properties.titlenumber}</p>
  </div>
  </div>`

    layer.bindPopup(content)
}

const pollingPopup = (feature, circleMarker) => {
    circleMarker.bindPopup(`<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-info smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Name</span>
      </div>
      <div class="smbc-map__item__body">
        <p>${feature.properties.name}</p>
      </div>
      </div>
      <div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Location</span>
      </div>
      <div class="smbc-map__item__body">
        <p>${feature.properties.address}</p>
      </div>
      </div>`
  
    )
  }

const AthleticsTracksPopup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Athletics Track</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Site: ${feature.properties.name}</p>
    <p>Type: ${feature.properties.type}</p>
  </div>
  </div>`
  
    layer.bindPopup(content)
  }
  
const TennisCourtsPopup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Tennis Courts</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Site: ${feature.properties.name}</p>
    <p>Type: ${feature.properties.type}</p>
    <p>No. of Courts: ${feature.properties.no_of_courts}</p>
  </div>
  </div>`
  
    layer.bindPopup(content)
  }

export {
    Land_Ownership_Popup,
    pollingPopup,
    AthleticsTracksPopup,
    TennisCourtsPopup
}