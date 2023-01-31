const childminderPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Childminder</span>
</div>
<div class="smbc-map__item__body">
  <p>Postcode Area: ${feature.properties.postcode_district}</p>
  <p>Number of Childminders: ${feature.properties.childminder_total}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

export {
}