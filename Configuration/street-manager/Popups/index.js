

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
    permitsPopup
  }