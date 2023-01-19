  
const brownfield2019Popup = (properties) => {
  
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">  
    <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Brownfield Land Register 2019</span>
  </div>
    <div class="smbc-map__item__body">
      <p>Reference: ${properties.sitereference}</p>
      <p>Address: ${properties.sitenameaddress.replace(/"/g, '')}</p>
      <p>Net Dwellings: ${properties.netdwellingsrangeto}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const brownfield2020Popup = (properties) => {
  
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">  
    <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Brownfield Land Register 2020</span>
  </div>
    <div class="smbc-map__item__body">
      <p>Reference: ${properties.sitereference}</p>
      <p>Address: ${properties.sitenameaddress.replace(/"/g, '')}</p>
      <p>Net Dwellings: ${properties.netdwellingsrangefrom}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

export {
    brownfield2019Popup,
    brownfield2020Popup
}
