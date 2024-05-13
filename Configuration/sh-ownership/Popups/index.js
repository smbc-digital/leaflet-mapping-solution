const Land_Ownership_Popup = (properties) => {
    return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Land Ownership</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${properties.property_name}</p>
    <p>Committee: ${properties.committee_new}</p>
    <p>Title Number: ${properties.titlenumber}</p>
    <p>Area: ${properties.area_sqm} <b>&#13217;</b></p>
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

const Assets_Popup = (properties) => {
  return(`<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Council Owned Property Assets</span>
    </div>
    <div class="smbc-map__item__body">
        <p>Name: ${properties.epims_property_name}</p>
        <p>UPRN: ${properties.epims_uprn}</p>
        <p>Floor Area: ${properties.epims_floor_area_sqm} <b>&#13217;</b></p>
      </div>
      </div>`
    )
  }

    const Stock_Popup = (feature, layer) => {
      const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-file-text smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Stockport Homes</span>
    </div>
    <div class="smbc-map__item__body">
          <p>Ref: ${feature.properties.property_reference}</p>
          <p>Address: ${feature.properties.full_address}</p>
          <p>Type: ${feature.properties.property_type}</p>
          <p>Bedrooms: ${feature.properties.bedrooms}</p>
    </div>
    </div>`
    
      layer.bindPopup(content)
    }

export {
  Land_Ownership_Popup,
  Leases_Popup,
  Assets_Popup,
  Stock_Popup
}