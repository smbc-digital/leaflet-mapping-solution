const landOwnershipPopup = (properties) => {
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

export {
  landOwnershipPopup
}