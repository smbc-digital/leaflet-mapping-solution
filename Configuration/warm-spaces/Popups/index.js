const communityPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Community Building</span>
    </div>
      <div class="smbc-map__item__body">
        <p>${feature.properties.name}</p>
        <p>Managed by: ${feature.properties.managed_by}</p>
        <p>Address: ${feature.properties.one_line_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const warmPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Warm Spaces</span>
    </div>
      <div class="smbc-map__item__body">
        <p>${feature.properties.name}</p>
        <p>${feature.properties.address}</p>
        <p><a href="${feature.properties.website}" target="_blank">Website</a></p>
        <p>Open: ${feature.properties.times}</p>
        <p>Facilities: ${feature.properties.facilities}</p>
        <p>Activities: ${feature.properties.activities}</p>
        <p>Phone: ${feature.properties.phone_number}</p>
        <p><a href="${feature.properties.website}" target="_blank">Website</a></p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const warmPopup2024 = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Warm Spaces</span>
    </div>
      <div class="smbc-map__item__body">
        <p>${feature.properties.warm_space}</p>
        <p>${feature.properties.address}</p>
        <p>${feature.properties.opening_hours}</p>
        <p>${feature.properties.offer}</p>
        
        
      
    </div>
  </div>`

  layer.bindPopup(content)
}

const openPopup = feature => {
  return `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Warm Spaces</span>
</div>
<div class="smbc-map__item__body">
  <p><a href="${feature.properties.url}" target="_blank">${feature.properties.facility_name}</a></p>
  <p>Address: ${feature.properties.postal_address}</p>
  <p><a href="${feature.properties.opening__times}" target="_blank">Opening Times</a></p>
  
</div>
</div>`

  layer.bindPopup(content)
}

const openingsoonPopup = feature => {
  return `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Library</span>
</div>
<div class="smbc-map__item__body">
  <p><a href="${feature.properties.url}" target="_blank">${feature.properties.facility_name}</a></p>
  <p>Address: ${feature.properties.postal_address}</p>
  <p><a href="${feature.properties.opening__times}" target="_blank">Opening Times</a></p>
  <p></p>
  <p><a href="mailto:${feature.properties.email}" target="_blank">Email Library</a></p>
</div>
<div class="govuk-panel smbc-panel--error govuk-!-padding-1">
<div class="smbc-panel__body smbc-!-font-color-white">
  ${feature.properties.notes}
</div>
</div>
</div>`

  layer.bindPopup(content)
}

const librariesPopup = (feature, layer) => {
  var content = getcontent_libraries(feature)

  layer.bindPopup(content)
}

const getcontent_libraries = feature => {
  switch  (feature.properties.open) {  
    case "open":
        return openPopup(feature)
    case "opening soon":
        return openingsoonPopup(feature)
 
  }
}

export {
  communityPopup,
  librariesPopup,
  warmPopup,
  warmPopup2024
}