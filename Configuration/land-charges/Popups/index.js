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
</div>`
    
    layer.bindPopup(content)
}
const pt3_article4_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pt3 - Article 4</span>
</div>
<div class="smbc-map__item__body">
<p>${feature.properties.description1}</p>
<p>Description: ${feature.properties.description2}</p>
<p>Registered Date: ${feature.properties.date_registered}</p>
</div>
</div>`

    layer.bindPopup(content)
}
const pt3_conservation_areas_Popup = (feature, layer) => {
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
</div>`

    layer.bindPopup(content)
}
const pt3_misc_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pt3 - Misc</span>
</div>
<div class="smbc-map__item__body">
  <p>Description: ${feature.properties.description}</p>
  <p>Location: ${feature.properties.location}</p> 
  <p>Registered Date: ${feature.properties.date_registered}</p>
  <p>TLC Reference: ${feature.properties.tlc_ref}</p>
</div>
</div>`


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
</div>`

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
</div>`

    layer.bindPopup(content)
}
const pt3_tpo_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt3 - TPOs</span>
    </div>
    <div class="smbc-map__item__body">
    <p>${feature.properties.description1}</p>
    <p>Description: ${feature.properties.description2}</p>
    <p>Registered Date: ${feature.properties.date_registered}</p>
    <p>TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_ancient_monuments_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Ancient Monuments</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Registered Date: ${feature.properties.date_registered}</p>
      <p>TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_common_land_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Common Land and Village Greens</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Registered Date: ${feature.properties.date_registered}</p>
      <p>TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_cpo_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Compulsory Purchase Orders</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Registered Date: ${feature.properties.date_registered}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_misc_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Misc</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Description: ${feature.properties.description}</p>
    <p>Location: ${feature.properties.location}</p> 
    <p>Registered Date: ${feature.properties.date_registered}</p>
    <p>TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_pipelines_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Pipelines</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Registered Date: ${feature.properties.date_registered}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_s38_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Section 38s</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p> 
      <p>Registered Date: ${feature.properties.date_registered}</p>
      <p>TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_smoke_control_areas_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Smoke Control Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Registered Date: ${feature.properties.date_registered}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt4_sssi_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt4 - Special Sites of Scientific Interest</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Registered Date: ${feature.properties.date_registered}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt6a_advanced_payments_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt6a - Advanced Payments</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Description: ${feature.properties.description}</p>
    <p>Registered Date: ${feature.properties.date_registered}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt6a_misc_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt6a - Misc</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Location: ${feature.properties.location}</p> 
      <p>Registered Date: ${feature.properties.date_registered}</p>
      <p>TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}
const pt10_misc_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Pt10 - Misc</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Description: ${feature.properties.description}</p>
      <p>Location: ${feature.properties.location}</p> 
      <p>Registered Date: ${feature.properties.date_registered}</p>
      <p>TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>
    </div>`

    layer.bindPopup(content)
}

export {
  pt2_misc_Popup,
  pt3_article4_Popup,
  pt3_conservation_areas_Popup,
  pt3_misc_Popup,
  pt3_planning_Popup,
  pt3_planning_notices_Popup,
  pt3_tpo_Popup,
  pt4_ancient_monuments_Popup,
  pt4_common_land_Popup,
  pt4_cpo_Popup,
  pt4_misc_Popup,
  pt4_pipelines_Popup,
  pt4_s38_Popup,
  pt4_smoke_control_areas_Popup,
  pt4_sssi_Popup,
  pt6a_advanced_payments_Popup,
  pt6a_misc_Popup,
  pt10_misc_Popup
}