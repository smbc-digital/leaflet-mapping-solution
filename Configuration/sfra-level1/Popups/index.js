const floodzone_2_popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Flood Zone 2</span>
    </div>
  </div>`

  layer.bindPopup(content)
}

const floodzone_3_popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Flood Zone 3</span>
    </div>
  </div>`

  layer.bindPopup(content)
}

const fzcc_availablePopup = feature => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Flood Zone with Climate Change</span>
    </div>
  </div>`
}

const fzcc_unavailablePopup = feature => {
    return `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fa fa-minus smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">Flood Zone with Climate Change - Unavailable</span>
      </div>
      <div class="smbc-map__item__body">
        <p>Where data is missing from the currently published Flood Map for Planning - Flood Zones with Climate Change this is shown by a yellow polygon. Please refer to the Level 1 Strategic Flood Risk Assessment report for further details.</p>
      </div>
    </div>`
}

const fzccPopup = (feature, layer) => {
  var content = getcontent_fzcc(feature)

  layer.bindPopup(content)
}

const getcontent_fzcc = feature => {
  switch  (feature.properties.type) {  
    case 'Unavailable':
        return fzcc_unavailablePopup(feature)
    case 'Flood Zones plus climate change':
        return fzcc_availablePopup(feature)
  }
}





export {
  floodzone_2_popup,
  floodzone_3_popup,
  fzccPopup
}
