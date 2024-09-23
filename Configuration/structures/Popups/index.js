const carparksPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
   <i class="fab fa-product-hunt  smbc-map__item__header__block__icon" aria-hidden="true"></i>
   <p class="smbc-map__item__header__block__title">Car Parks</p>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>Postcode: ${feature.properties.post_code}</p>
    <p>RingGo Zone: ${feature.properties.ringgo_zone}</p>
    <p>Spaces: ${feature.properties.total_capacity}</p>
    <p>Disabled Spaces: ${feature.properties.disabled_spaces}</p>
    <p>Parent and Child Spaces: ${feature.properties.parent_child_spaces}</p>
    <p>Electric Vehicle Spaces: ${feature.properties.electric_vehicle_spaces}</p>
    <p>Height Restriction: ${feature.properties.height_restriction_m}</p>
    <p>Park Mark: ${feature.properties.park_mark}</p>
  </div></div>`
 
  layer.bindPopup(content)
 }

 export {
  carparksPopup
}