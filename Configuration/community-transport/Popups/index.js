//const mcflinePopup = (feature, layer) => {
  
//  const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">Mayor's Challenge Fund</p>
 // <p></p>
//  <p class="info">${feature.properties.name}</p>
  
//  </div>`

 // layer.bindPopup(content)
// }
 //const mcfpointsPopup = (feature, layer) => {
  
 // const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">&nbsp;Mayor's Challenge Fund</p>
 // <p></p>
 // <p class="info">${feature.properties.notes}</p>
 // <p class="info">Scheme: ${feature.properties.scheme}</p>
 // </div>`
 
 // layer.bindPopup(content)
 //}
 const prowPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Public Right of Way</span>
</div>
<div class="smbc-map__item__body">
<p>PROW Number: ${feature.properties.row}</p>
<p>Type: ${feature.properties.type}</p>
</div>
</div>`
    
    layer.bindPopup(content)
}

 const taxiranksPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
   <i class="fa fa-taxi  smbc-map__item__header__block__icon" aria-hidden="true"></i>
   <p class="smbc-map__item__header__block__title">Taxi Ranks</p>
  </div>
  <div class="smbc-map__item__body">
    <p>Location: ${feature.properties.desc}</p>
  </div></div>`
 
  layer.bindPopup(content)
 }

 const speedLimitPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
   <i class="fas fa-tachometer-alt  smbc-map__item__header__block__icon" aria-hidden="true"></i>
   <p class="smbc-map__item__header__block__title">20mph Speed Limit</p>
  </div>
  <div class="smbc-map__item__body">
    <p>Road Name: ${feature.properties.site_road}</p>
  </div></div>`
 
  layer.bindPopup(content)
 }


 const carparksPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
   <i class="fab fa-product-hunt  smbc-map__item__header__block__icon" aria-hidden="true"></i>
   <p class="smbc-map__item__header__block__title">Car Parks</p>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>Spaces: ${feature.properties.total_capacity}</p>
  </div></div>`
 
  layer.bindPopup(content)
 }

const land_Ownership_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Land Ownership</span>
</div>
<div class="smbc-map__item__body">
  <p>Name: ${feature.properties.property_name}</p>
  <p>Committee: ${feature.properties.committee_new}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const leases_Popup = (feature, layer) => {
const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
<i class="fa fa-file-text smbc-map__item__header__block__icon" aria-hidden="true"></i>
<span class="smbc-map__item__header__block__title">Leases</span>
</div>
<div class="smbc-map__item__body">
<p>Committee: ${feature.properties.description}</p>
</div>
</div>`

layer.bindPopup(content)
}

const wardPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker-alt smbc-map__item__header__block__icon"></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Ward: ${feature.properties.ward_name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

 export {
  
  prowPopup,
  taxiranksPopup,
  carparksPopup,
  wardPopup,
  speedLimitPopup,
  land_Ownership_Popup,
  leases_Popup
}