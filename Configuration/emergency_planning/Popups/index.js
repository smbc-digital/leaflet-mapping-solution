const careHomePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Care Home</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Address: ${feature.properties.onelineaddress}</p>
    </div>
  </div>`
  layer.bindPopup(content)
}

const cat1CareHomePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Cat 1 Care Home</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Name: ${feature.properties.name_of_scheme_}</p>
    </div>
  </div>`
  layer.bindPopup(content)
}

const cat2CareHomePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Cat 2 Care Home</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Name: ${feature.properties.name_of_scheme_}</p>
    </div>
  </div>`
  layer.bindPopup(content)
}

const exrpCareHomePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Extra Care and private Care Home</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Name: ${feature.properties.name_of_scheme_}</p>
    </div>
  </div>`
  layer.bindPopup(content)
}

export {
  careHomePopup, 
  cat1CareHomePopup,
  cat2CareHomePopup,
  exrpCareHomePopup

}