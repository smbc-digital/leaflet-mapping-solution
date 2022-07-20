const polling_v1Popup = (feature, circleMarker) => {
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
        <span class="smbc-map__item__header__block__title">New District ID</span>
      </div>
      <div class="smbc-map__item__body">
        <p>${feature.properties.new_polling_id}</p>
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
          <p>District Id: ${feature.properties.polling_name}</p>
      </div>
    </div>`
  
    layer.bindPopup(content)
  }
  const polling_districts_v1Popup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Proposed Polling District</span>
      </div>
        <div class="smbc-map__item__body">
          <p>New District Id: ${feature.properties.polling_district_id}</p>
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
        <span class="smbc-map__item__header__block__title">New Ward</span>
      </div>
      <div class="smbc-map__item__body">
        <p>${feature.properties.ward_name}</p>
        
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
  export {
      polling_v1Popup,
      polling_districts_v1Popup,
      polling_districtsPopup,
      OldWardpopup,
      NewWardpopup,
      parliamentaryPopup
  }