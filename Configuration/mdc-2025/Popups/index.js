const catchmentPopup = (properties) => {
  return `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Primary Catchments</span>
</div>
<div class="smbc-map__item__body">
  <p>School Name: ${properties.school_name}</p>
  <p>Type: ${properties.school_type}</p>
  <p>Funding: ${properties.funding_type}</p>
  <p>Headteacher: ${properties.headteacher}</p>
  <p><a href="${properties.ofsted_url}" target="_blank">Ofsted Link</a></p>
  <p><a href="${properties.website}" target="_blank">School Website</a></p>
</div>
</div>`
layer.bindPopup(content)
}

const primaryPopup = (properties) => {
  return `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-mortar-board smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Primary School</span>
</div>
<div class="smbc-map__item__body">
  <p>${properties.name}</p>
  <p>Building Condition: <br>${properties.building_condition_rag}</p>
  <p>Catchment Expressed: <br>${properties.catchment_expressed_rag}</p>
  <p>Preferences Offered: <br>${properties.preferences_offered_rag}</p>
  <p>Capacity Surplus: <br>${properties.capacity_surplus_rag}</p>
  <p>Type: ${properties.school_type}</p>
  <p>Funding: ${properties.funding_type}</p>
  <p>Headteacher: ${properties.headteacher}</p>
  <p><a href="${properties.ofsted_url}" target="_blank">Ofsted Link</a></p>
  <p><a href="${properties.website}" target="_blank">School Website</a></p>

  <!--<p><img src="https://s3.eu-west-1.amazonaws.com/maps.stockport.gov.uk/mdc/st_thomas.PNG" width="50" height="60"></p>-->
  
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
  <p>Facilities: ${feature.properties.facilities}</p>
  <p>Address: ${feature.properties.address}</p>
  <p>Opening Times: ${feature.properties.opening_times}</p>
  <p><a href="${feature.properties.url}" target="_blank">Life Leisure Link</a></p>
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

export {
  catchmentPopup,
  primaryPopup,
  leisurePopup,
  leisure_comPopup,
  toiletPopup,
  dentistPopup
}