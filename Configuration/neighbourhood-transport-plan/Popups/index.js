const BeEVPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Be EV Rollout</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  <p>Status:<br> ${feature.properties.status}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

export {
  BeEVPopup
}