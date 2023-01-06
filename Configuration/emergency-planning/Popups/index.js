const careHomePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Care Home</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Address: ${feature.properties.onelineaddress}</p>
    </div>
  </div>`
  layer.bindPopup(content)
}

export {careHomePopup}