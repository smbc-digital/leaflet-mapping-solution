
const primaryCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-address-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const primaryCatholicCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-address-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Catholic Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondaryCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-address-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondaryCatholicCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-address-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary Catholic Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}
export {
  primaryCatchmentPopup,
  primaryCatholicCatchmentPopup,
  secondaryCatchmentPopup,
  secondaryCatholicCatchmentPopup
}
