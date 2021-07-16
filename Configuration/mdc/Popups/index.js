//const parksPopup = feature => {
//  return `<div class="smbc-map__item">
//<div class="smbc-map__item__header__block">
//  <i class="fa fa-child smbc-map__item__header__block__icon" aria-hidden="true"></i>
//  <span class="smbc-map__item__header__block__title">Park</span>
//</div>
//<div class="smbc-map__item__body">
  
//  <p>Name: ${feature.properties.park_name}</p>
  
//</div>
//</div>`
//layer.bindPopup(content)
//}

//const mdcPopup = (feature, layer) => {
//  var content = parksPopup(feature)

//  layer.bindPopup(content)
//}

const parksPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-child smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Park</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.park_name}</p>
  
</div>
</div>`

layer.bindPopup(content)
}

const catchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-crop smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Primary Catchments</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.school_name}</p>
  
</div>
</div>`

layer.bindPopup(content)
}

const primaryPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-mortar-board smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Primary School</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  <p>Funding Type: ${feature.properties.funding_type}</p>
  <!--<p><img src="https://s3.eu-west-1.amazonaws.com/maps.stockport.gov.uk/mdc/st_thomas.PNG" width="50" height="60"></p>-->
  
</div>
</div>`

layer.bindPopup(content)
}



export {
  parksPopup,
  catchmentPopup,
  primaryPopup
}