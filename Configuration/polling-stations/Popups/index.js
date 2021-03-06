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
      pollingPopup,
      polling_districtsPopup
  }