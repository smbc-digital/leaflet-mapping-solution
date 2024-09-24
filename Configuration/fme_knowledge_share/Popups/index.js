 const poiPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-info-circle smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Point of Interest</span>
</div>
<div class="smbc-map__item__body">
  <p>Category: ${feature.properties.category}</p>
  <p>Address: ${feature.properties.one_line_address}</p>
  <p>UPRN: ${feature.properties.uprn}</p>
</div>
</div>`

  layer.bindPopup(content)
}
 
 export {
  poiPopup,
}