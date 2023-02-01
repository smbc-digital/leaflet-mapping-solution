const TennisCourtsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Tennis Courts</span>
</div>
<div class="smbc-map__item__body">
  <p>Site: ${feature.properties.name}</p>
  <p>Type: ${feature.properties.type}</p>
  <p>No. of Courts: ${feature.properties.no_of_courts}</p>
</div>
</div>`

  layer.bindPopup(content)
}

export {
}