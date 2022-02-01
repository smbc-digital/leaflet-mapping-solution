const pt2_misc_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pt2 - Misc</span>
</div>
<div class="smbc-map__item__body">
  <p>Description: ${feature.properties.description}</p>
  <p>Location: ${feature.properties.location}</p> 
  <p>Registered Date: ${feature.properties.date_registered}</p>
  <p>TLC Reference: ${feature.properties.tlc_ref}</p>
</div>
</div>
<button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" data-module="govuk-button">
  Submit a Comment
</button>`
    
    layer.bindPopup(content)
}

const pt6_misc_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pt2 - Misc</span>
</div>
<div class="smbc-map__item__body">
  <h3>Pt6 misc popup</h3>
  <p>Description: ${feature.properties.description}</p>
  <p>Location: ${feature.properties.location}</p> 
  <p>Registered Date: ${feature.properties.date_registered}</p>
  <p>TLC Reference: ${feature.properties.tlc_ref}</p>
</div>
</div>
<button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" data-module="govuk-button">
  Submit a Comment
</button>`
    
    layer.bindPopup(content)
}

const tpoPopup = (feature, layer) => {

  var ft = feature.type
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Pt3 - TPOs</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Status: ${feature.properties.status}</p>
  <p>Address: ${feature.properties.tpo_name}</p>
  <p>TPO Ref: ${feature.properties.tpo_number} ${feature.properties.tree_number}</p>
  </div>
</div>
<button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" data-module="govuk-button">
  Submit a Comment
</button>`

  
  layer.bindPopup(content)
  }

  const conservation_areas_Popup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Pt3 - Conservation Areas</span>
  </div>
  <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Type: ${feature.properties.type}</p> 
      <p>Registered Date: ${feature.properties.date_registered}</p>
  </div>
  </div>
  <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" data-module="govuk-button">
    Submit a Comment
  </button>`
  
      layer.bindPopup(content)
  }
  const pt3_planning_Popup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Pt3 - Planning Applications</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Description: ${feature.properties.description}</p>
    <p>Location: ${feature.properties.location}</p>
    <p>Reference: ${feature.properties.plan_ref}</p>
    <p>Registered Date: ${feature.properties.date_registered}</p>
  </div>
  </div>
  <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" data-module="govuk-button">
    Submit a Comment
  </button>`
  
      layer.bindPopup(content)
  }
  const pt3_planning_notices_Popup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Pt3 - Planning Notices</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Description: ${feature.properties.description}</p>
    <p>Location: ${feature.properties.location}</p>
    <p>Registered Date: ${feature.properties.date_registered}</p>
  </div>
  </div>
  <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" data-module="govuk-button">
    Submit a Comment
  </button>`
  
      layer.bindPopup(content)
  }

export {
  pt2_misc_Popup,
  pt6_misc_Popup,
  tpoPopup,
  conservation_areas_Popup,
  pt3_planning_Popup,
  pt3_planning_notices_Popup
}