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

const committeePopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Committee</span>
  </div>
  <div class="smbc-map__item__body">
    <p>${feature.properties.committee_name}</p>
   

  </div>
</div>`

  layer.bindPopup(content)
 }

export {
  librariesPopup2,
  committeePopup
}