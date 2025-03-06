const BeEVPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fas fa-bolt smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Be EV Rollout</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  <p>Status: ${feature.properties.status}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const BeEVPopup2 = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fas fa-bolt smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Be EV Rollout</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
  <p>Status: ${feature.properties.status}</p>
  
</div>
</div>`
layer.bindPopup(content)
}

const librariesPopup2 = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Library</span>
    </div>
      <div class="smbc-map__item__body">
      <p><a href="${properties.url}" target="_blank">${properties.facility_name}</a></p>
      <p>Address: ${properties.postal_address}</p>
      <p><a href="${properties.opening__times}" target="_blank">Opening Times</a></p>
      <p></p>
      <p><a href="mailto:${properties.email}" target="_blank">Email Library</a></p>
    </div>
  </div>`
}

const Article4_1_direction_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Article 4-1 Direction</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.conservation_area}</p>
    <p>Type: ${feature.properties.type}</p>
    <a href="${feature.properties.web_db_link}" target="_blank">Further Information</a>
    </div>
    </div>`

  layer.bindPopup(content)
}

const permitsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Permit</span>
</div>
<div class="smbc-map__item__body">
  
  <p>Works Ref:<br> ${feature.properties.works_reference_number}</p>
  <p>Permit Ref:<br> ${feature.properties.permit_reference_number}</p>
  <p>Project Ref:<br> ${feature.properties.project_reference_number}</p>
  <p>Submission Date:<br> ${feature.properties.submission_date}</p>
  <p>Works Category:<br> ${feature.properties.works_category}</p>
  <p>Street:<br> ${feature.properties.road_street}</p>
  <p>Contractor:<br> ${feature.properties.approved_contractor}</p>
  <p>Assessment Status:<br> ${feature.properties.assessment_status}</p>
  <p>Permit Status:<br> ${feature.properties.permit_status}</p>
  <p>Traffic Management<br> ${feature.properties.traffic_management_type}</p>
  <p>Proposed Start Date:<br> ${feature.properties.proposed_start_date}</p>
  <p>Proposed End Date:<br> ${feature.properties.proposed_end_date}</p>
  <p>Actual Start Date:<br> ${feature.properties.actual_start_date}</p>
  <p>Actual End Date:<br> ${feature.properties.actual_end_date}</p>

</div>
</div>`
layer.bindPopup(content)
}


export {
  BeEVPopup,
  librariesPopup2,
  Article4_1_direction_Popup,
  permitsPopup,
  BeEVPopup2
}