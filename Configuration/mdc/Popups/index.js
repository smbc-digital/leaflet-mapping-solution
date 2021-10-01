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
  <p>Building Condition: ${feature.properties.rag}</p>
  <p>Catchment Expressed: ${feature.properties.catchment_expressed_rag}</p>
  <p>Preferences Offered: ${feature.properties.preferences_offered_rag}</p>
  <p>Capacity Surplus: ${feature.properties.capacity_surplus_rag}</p>

  <!--<p><img src="https://s3.eu-west-1.amazonaws.com/maps.stockport.gov.uk/mdc/st_thomas.PNG" width="50" height="60"></p>-->
  
</div>
</div>`
layer.bindPopup(content)
}

const secondaryPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-mortar-board smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Independent Secondary School</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const libraryPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Library</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.facility_name}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const eyPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-linux smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Early Years Provider</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  <p>Type: ${feature.properties.type}</p>
  <p>Max Capacity: ${feature.properties.max_capacity}</p>
  <p>Services Offered: ${feature.properties.services_offered}</p>
  <p>Scope for Expansion: ${feature.properties.scope_for_expansion}</p>  
</div>
</div>`
layer.bindPopup(content)
}

const childminderPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-crop smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Nursery School</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.provider_name}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const leisurePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-heartbeat smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Leisure Centre</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.centre_name}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const leisure_comPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-heartbeat smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Commercial Leisure</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  <p>${feature.properties.address}
  ${feature.properties.postcode}</p>
</div>
</div>`
layer.bindPopup(content)
}

const toiletPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-crop smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Community Toilet</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.business_organisation}</p>
  <p>Open: ${feature.properties.opening_times_comment}</p>
  <p>Baby Changing: ${feature.properties.baby_changing}</p>
  <p>Disabled Facilities: ${feature.properties.disabled_facilities}</p>

  
</div>
</div>`
layer.bindPopup(content)
}

const dentistPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-smile-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Dentist</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  ${feature.properties.add1},
  ${feature.properties.add2},
  ${feature.properties.add3},
  ${feature.properties.postcode}
  <p><a href="${feature.properties.link}" target="_blank">NHS Link</a></p>
  <p>Phone: ${feature.properties.telephone}</p>  
</div>
</div>`
layer.bindPopup(content)
}

const doctorPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-user-md smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Doctor</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  ${feature.properties.add1},
  ${feature.properties.add2},
  ${feature.properties.add3},
  ${feature.properties.postcode}
  <p><a href="${feature.properties.link}" target="_blank">NHS Link</a></p>
  <p>Phone: ${feature.properties.telephone}</p>  
</div>
</div>`
layer.bindPopup(content)
}

const pharmacyPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-user-md smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pharmacy</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  ${feature.properties.address}
</div>
</div>`
layer.bindPopup(content)
}

const carehomePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-bed smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Care Home</span>
</div>
<div class="smbc-map__item__body">
  <p>Name: ${feature.properties.home_name}</p>
  <p>Owner: ${feature.properties.owner}</p>
  <p>Total Beds: ${feature.properties.total_beds}</p>
  <p>CQC Rating: ${feature.properties.cqc_rating}</p>
 
</div>
</div>`
layer.bindPopup(content)
}

const communitycentrePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Community Centre</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name_of_community_centre}</p>
  <p>${feature.properties.address}</p>
</div>
</div>`
layer.bindPopup(content)
}

const communityfacilityPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Community Facility</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const greenspacePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Greenspace</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.function}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

export {
  parksPopup,
  catchmentPopup,
  primaryPopup,
  libraryPopup,
  eyPopup,
  leisurePopup,
  leisure_comPopup,
  toiletPopup,
  childminderPopup,
  dentistPopup,
  doctorPopup,
  pharmacyPopup,
  carehomePopup,
  communitycentrePopup,
  communityfacilityPopup,
  greenspacePopup,
  secondaryPopup
}