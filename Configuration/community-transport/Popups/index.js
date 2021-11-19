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

 const beewaysPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bug" aria-hidden="true"></i><p class="title">&nbsp;Bee Network</p>
  <p></p>
  <p class="info">${feature.properties.district}</p>
  
  </div>`
  
  layer.bindPopup(content)
 }

 const beewayspointPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bug" aria-hidden="true"></i><p class="title">&nbsp;Crossings Under Construction</p>
  <p></p>
  <p class="info">Scheme: ${feature.properties.scheme_name}</p>
  <p class="info">Details: ${feature.properties.additional_information}</p>
  </div>`
  
  layer.bindPopup(content)
 }

 const beewayslinePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bug" aria-hidden="true"></i><p class="title">Bee Network Under Development</p>
  <p></p>
  <p class="info">Scheme: ${feature.properties.scheme_name}</p>
  <p class="info">Details: ${feature.properties.additional_information}</p>
  </div>`
  
  layer.bindPopup(content)
 }

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
  
  const content = `<div class="item"><i class="fa fa-taxi" aria-hidden="true"></i><p class="title">&nbsp;Taxi Ranks</p>
  <p></p>
  <p class="info">Location: ${feature.properties.desc}</p>
  </div>`
  
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
 
 const wardPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker-alt smbc-map__item__header__block__icon"></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Ward: ${feature.properties.ward_name}</p>
      <p>Councillors: <br>
      ${feature.properties.cllr_1} (${feature.properties.cllr_1_party})<br> 
      ${feature.properties.cllr_2} (${feature.properties.cllr_2_party})<br> 
      ${feature.properties.cllr_3} (${feature.properties.cllr_3_party}) </p>
    </div>
  </div>`

  layer.bindPopup(content)
}

 export {
  
  beewaysPopup,
  beewayspointPopup,
  beewayslinePopup,
  prowPopup,
  taxiranksPopup,
  carparksPopup,
  wardPopup
}