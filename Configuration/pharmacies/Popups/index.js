const pharmacyPopup = (properties) => {

  var services = properties.gm_minor_ailment_service === 'Yes' ? 'Minor Ailment Service' : ''
  if (services === '') {
    services = properties.emergency_hormonal_contraception === 'Yes' ? 'Emergency Hormonal Contraception' : ''
  } else {
    services += properties.emergency_hormonal_contraception === 'Yes' ? ', <br>Emergency Hormonal Contraception' : ''
  }
  
  if (services === '') {
    services = properties.needle_exchange_services === 'Yes' ? 'Needle Exchange' : ''
  } else {
    services += properties.needle_exchange_services === 'Yes' ? ', <br>Needle Exchange' : ''
  }

  if (services === '') {
    services = properties.stop_smoking_advanced === 'Yes' ? 'Stop Smoking Advanced Service' : ''
  } else {
    services += properties.stop_smoking_advanced === 'Yes' ? ', <br>Stop Smoking Advanced Service' : ''
  }

  if (services === '') {
    services = properties.supervised_consumption_services === 'Yes' ? 'Supervised Consumption' : ''
  } else {
    services += properties.supervised_consumption_services === 'Yes' ? ', <br>Supervised Consumption' : ''
  }

  if (services === '') {
    services = 'N/A'
  }

  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">  
    <i class="fa fa-plus-square smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pharmacy</span>
  </div>
    <div class="smbc-map__item__body">
      <p>Name: ${properties.pharmacy_name}</p>
      <p>Address: ${properties.address}, ${properties.postcode}</p>
      <p>Services: <br>${services}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

export {
  pharmacyPopup
}