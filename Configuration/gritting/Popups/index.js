const grittingroutesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Gritting Routes</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Route Type: ${feature.properties.classification}</p>
    <p>Route No: ${feature.properties.route}</p>
    <p>Route Description: ${feature.properties.name}</p>
  </div>
</div>`
 
  layer.bindPopup(content)
 }

const gritboxesPopup = (feature, layer) => {
 
 const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-snowflake smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Grit Bins</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Street: ${feature.properties.street}</p>
    <p>Location: ${feature.properties.position}</p>
  </div>
</div>`
 
 layer.bindPopup(content)
}

export {
  grittingroutesPopup,
  gritboxesPopup
}