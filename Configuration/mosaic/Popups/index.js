const lsoaMosaicPopup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Largest Mosaic Group per LSOA</span>
  </div>
  <div class="smbc-map__item__body">
    <p>LSOA Name:<br> ${feature.properties.lsoa21nm}</p>
    <p>Largest Mosaic Group:<br> ${feature.properties.largest_mosaic_group_in_lsoa}</p>
    <p>${feature.properties.mosaic_link}</p>
    
  </div>
  </div>`
  layer.bindPopup(content)
  }

const householdMosaicPopup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Household Mosaic Data</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Address:<br> ${feature.properties.onelineaddress}</p>
    <p>Mosaic Group:<br> ${feature.properties.mosaic_household_group_name}</p>
    <p>Mosaic Type:<br> ${feature.properties.mosaic_household_type_name}</p>
    <p>${feature.properties.mosaic_link}</p>
    
  </div>
  </div>`
  layer.bindPopup(content)
  }

  export {
    lsoaMosaicPopup,
    householdMosaicPopup
  }