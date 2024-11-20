const area_committeePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Area Committee</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Area Committee: ${feature.properties.committee_name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

export {
  area_committeePopup,
}
