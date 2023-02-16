const landownershipPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Land Ownership</span>
</div>
<div class="smbc-map__item__body">
  <p>Name: ${feature.properties.property_name}</p>
  <p>Committee: ${feature.properties.committee_new}</p>
  <p>Title Number: ${feature.properties.titlenumber}</p>
  <p>Area: ${feature.properties.area_sqm}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const cfsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">CfS Submissions</span>
</div>
<div class="smbc-map__item__body">
  <p>CfS Ref: ${feature.properties.cfsites_ref}</p>
  <p>Year: ${feature.properties.year}</p>
  <p>Data Source: ${feature.properties.data_source}</p>
  <p>Site Address: ${feature.properties.site_address}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const boundariesPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Centres Boundaries</span>
</div>
<div class="smbc-map__item__body">
  <p>Type: ${feature.properties.type}</p>
  <p>Name: ${feature.properties.policysitename}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const boundaries800Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Centres Boundaries + 800m</span>
</div>
<div class="smbc-map__item__body">
  <p>Within 800m of a District or Large Local Centre</p>
</div>
</div>`

  layer.bindPopup(content)
}

const developablesitesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sites - Developable (SHLAA 2020)</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Site Reference: ${feature.properties.site_reference}</p>
      <p>Site Address: ${feature.properties.site_address}</p>
      <p>Site Description: ${feature.properties.site_description_2020}</p>
      <p>Site Area (Ha): ${feature.properties.site_area}</p>
      <p>Est. Site Capacity: ${feature.properties.capacity}</p>
      <p>Est. Delivery Years: ${feature.properties.delivery_years}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const nondevelopablesitesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sites - Not Developable (SHLAA 2020)</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Site Reference: ${feature.properties.site_reference}</p>
    <p>Site Address: ${feature.properties.site_address}</p>
    <p>Site Description: ${feature.properties.site_description}</p>
    <p>Site Area (Ha): ${feature.properties.site_area}</p>
    <p>Notes: ${feature.properties.leaflet_summary}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

export {
}