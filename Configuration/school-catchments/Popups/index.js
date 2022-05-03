
const primaryCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
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
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
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
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
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
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary Catholic Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const primarySchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const primaryCatholicSchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Catholic School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondarySchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondaryCatholicSchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary Catholic School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const specialSchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Special School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}


export {
  primaryCatchmentPopup,
  primaryCatholicCatchmentPopup,
  secondaryCatchmentPopup,
  secondaryCatholicCatchmentPopup,
  primarySchoolPopup,
  primaryCatholicSchoolPopup,
  secondarySchoolPopup,
  secondaryCatholicSchoolPopup,
  specialSchoolPopup
}
