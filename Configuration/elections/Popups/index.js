

  const pollingDistrictsPopup = (properties) => {
    return `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-archive smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">2023 Polling Districts</span>
      </div>
        <div class="smbc-map__item__body">
          <p>District ID: ${properties.polling_district_id}</p>
          <p>Polling Station: ${properties.polling_station_name}</p>
          <p>Electors: ${properties.electors_no}</p>
          <p>${properties.pdf_link}</p>
      </div>
    </div>`
  }
  
  export {
      pollingDistrictsPopup
      
  }