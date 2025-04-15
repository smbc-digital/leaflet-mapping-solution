

 const BeEVPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fab fa-product-hunt smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Car Park</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  <p>Cost: ${feature.properties.charging_category}</p>
  <p>Postcode: ${feature.properties.post_code}</p>
  <p>Spaces: ${feature.properties.total_capacity}</p>

  
</div>
</div>`
layer.bindPopup(content)
}

const wardPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker-alt smbc-map__item__header__block__icon" ></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Ward: ${properties.ward_name}</p>
      <p>Councillors: <br>
      ${properties.cllr_1} (${properties.cllr_1_party})<p> 
      ${properties.cllr_2} (${properties.cllr_2_party})<p> 
      ${properties.cllr_3} (${properties.cllr_3_party}) </p>
    </div>
  </div>`

  layer.bindPopup(content)
}
 export {
  BeEVPopup,
  wardPopup
}