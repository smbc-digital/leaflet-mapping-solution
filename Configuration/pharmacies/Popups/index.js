const pharmacyPopup = (properties) => {
  
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">  
    <i class="fa fa-plus-square smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pharmacy</span>
  </div>
    <div class="smbc-map__item__body">
      <p>Name: ${properties.pharmacy_name}</p>
      <p>Type: ${properties.pharmacy_type}</p>
      <p>Address: ${properties.address}, ${properties.postcode}</p>
      <p>Minor Ailment Service?: ${properties.gm_minor_ailment_service}</p>
      <p>Emergency Hormonal Contraception Service?: ${properties.emergency_hormonal_contraception}</p>
      <p>Needle Exchange Service?: ${properties.needle_exchange_services}</p>
      <p>Stop Smoking Advanced Service?: ${properties.stop_smoking_advanced}</p>
      <p>Supervised Consumption Services?: ${properties.supervised_consumption_services}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

export {
  pharmacyPopup
}