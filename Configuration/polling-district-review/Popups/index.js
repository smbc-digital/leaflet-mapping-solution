  const pollingDistrictsPopup = (properties) => {
    return `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-archive smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Polling District</span>
      </div>
        <div class="smbc-map__item__body">
          <p>District ID: ${properties.polling_district_id}</p>
          <p>Polling Station: ${properties.polling_station_name}</p>
          <p>Electors: ${properties.electors_no}</p>
          <p>${properties.pdf_link}</p>
      </div>
    </div>`
  }

  const pollingDistricts2024Popup = (properties) => {
    return `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-archive smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Polling District Review - Proposed Polling District</span>
      </div>
        <div class="smbc-map__item__body">
          <p>District ID: ${properties.polling_district_id}</p>
          <p>Polling Station: ${properties.polling_station_name}</p>
          <p>Electors: ${properties.electors_no}</p>
          <p>${properties.pdf_link}</p>
      </div>
    </div>`
  }

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
  
  export {pollingDistrictsPopup, pollingDistricts2024Popup, wardPopup}