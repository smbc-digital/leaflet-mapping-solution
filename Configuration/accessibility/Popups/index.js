/* const openPopup = feature => {
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
*/

const librariesPopup2 = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Library</span>
    </div>
      <div class="smbc-map__item__body">
      <p><a href="${properties.url}" target="_blank">${properties.facility_name}</a></p>
      <p>Address: ${properties.postal_address}</p>
      <p><a href="${properties.opening__times}" target="_blank">Opening Times</a></p>
      <p></p>
      <p><a href="mailto:${properties.email}" target="_blank">Email Library</a></p>
    </div>
  </div>`
}

const leisurecentresPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-heart smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Library</span>
      </div>
      <div class="smbc-map__item__body">
      <a href="${properties.url}" target="_blank">${properties.centre_name}</a>
      <p>Address: ${properties.address}</p>
      <p>Tel: ${properties.telephone}</p>
      <a href="mailto:${properties.email}" target="_blank">Email Leisure Centre</a>
    </div>
  </div>`
}

export {
  librariesPopup2,
  leisurecentresPopup
}