const Land_Ownership_Popup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Land Ownership</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.property_name}</p>
    <p>Committee: ${feature.properties.committee_new}</p>
    <p>Title Number: ${feature.properties.titlenumber}</p>
    <p>Area: ${feature.properties.area_sqm} <b>&#13217;</b></p>
  </div>
  </div>`

    layer.bindPopup(content)
}

const Leases_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-file-text smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Leases</span>
</div>
<div class="smbc-map__item__body">
  <p>Committee: ${feature.properties.description}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const Assets_Popup = (feature, circleMarker) => {
  circleMarker.bindPopup(`<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Council Owned Property Assets</span>
    </div>
    <div class="smbc-map__item__body">
        <p>Name: ${feature.properties.epims_property_name}</p>
        <p>UPRN: ${feature.properties.epims_uprn}</p>
        <p>Floor Area: ${feature.properties.epims_floor_area_sqm} <b>&#13217;</b></p>
      </div>
      </div>`
    )
  }

export {
  Land_Ownership_Popup,
  Leases_Popup,
  Assets_Popup
}