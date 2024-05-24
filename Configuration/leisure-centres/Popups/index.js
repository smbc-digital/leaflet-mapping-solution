/* const leisurecentresPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-heart smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Leisure Centres</span>
</div>
<div class="smbc-map__item__body">
  <a href="${feature.properties.url}" target="_blank">${feature.properties.centre_name}</a>
  <p>Address: ${feature.properties.address}</p>
  <p>Tel: ${feature.properties.telephone}</p>
  <a href="mailto:${feature.properties.email}" target="_blank">Email Leisure Centre</a>
</div>
</div>`

  layer.bindPopup(content)
} */

const leisurecentresPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-heart smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Leisure Centre</span>
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
  leisurecentresPopup
}