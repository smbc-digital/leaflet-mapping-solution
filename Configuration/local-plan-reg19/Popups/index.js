const districtcentrePopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-cart smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">District Centre</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Centre: ${properties.site_name}</p>
    </div>
  </div>`
}

const llcPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-basket smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Large Local Centre</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Centre: ${properties.site_name}</p>
    </div>
  </div>`
}


const olcPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-bag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Other Local Centre</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Centre: ${properties.site_name}</p>
  </div>
  </div>`
}

const centresPopup = (properties, layer) => {
  return getcontent_centres(properties)

  layer.bindPopup(content)
}

const getcontent_centres = properties => {
  switch  (properties.centre_type) {  
    case 'District Centre':
        return districtcentrePopup(properties)
    case 'LLC':
        return llcPopup(properties)
    case 'OLC':
      return olcPopup(properties)
  }
}

const wasteplanareaPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-asterisk smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">GM Waste Plan - Stockport Areas</span>
    </div>
  </div>`
}

const wasteplansitesPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-asterisk smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">GM Waste Plan - Stockport Sites</span>
    </div>
  </div>`
}

export {
  centresPopup,
  wasteplanareaPopup,
  wasteplansitesPopup
  
}