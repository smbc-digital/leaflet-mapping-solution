const FEC_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-users smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Family Education Cluster</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.family_education_cluster}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const area_committeePopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Area Committee</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Area Committee: ${feature.properties.committee_name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const police_neighbourhoodPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-taxi smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Neighbourhood Policing Team</span>
</div>
<div class="smbc-map__item__body">
  <p>Name: ${feature.properties.name}</p>
  <p>Neighbourhood Area: ${feature.properties.neighbourhood_area}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const police_locality_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-taxi smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Police Locality</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.locality}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const police_beat_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-taxi smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Police Beat</span>
</div>
<div class="smbc-map__item__body">
  <p>Foot Beat: ${feature.properties.footbeat}</p>
  <p>Beat Name: ${feature.properties.beatname}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const CCG_Localities_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-medkit smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">ASC Locality</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.name}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const CCG_Neighbourhoods_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-medkit smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">ASC Neighbourhood</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.label}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const Place_Neighbourhoods_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-globe smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Place Neighbourhood</span>
</div>
<div class="smbc-map__item__body">
  <p>${feature.properties.area_name}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const LSOA_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-bullseye smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">LSOA</span>
</div>
<div class="smbc-map__item__body">
  <p>Code: ${feature.properties.lsoa21cd}</p>
  <p>Name: ${feature.properties.lsoa21nm}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const MSOA_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-bullseye smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">MSOA</span>
</div>
<div class="smbc-map__item__body">
  <p>Code: ${feature.properties.msoa21cd}</p>
  <p>Name: ${feature.properties.msoa21nm}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const Ward_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-bullseye smbc-map__item__header__block__icon" aria-hidden="true"></i>
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

const wardPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker-alt smbc-map__item__header__block__icon" ></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Ward: ${properties.ward_name}</p>
      <p>Councillors: <br>
      ${properties.cllr_1} (${properties.cllr_1_party})<p> 
      ${properties.cllr_2} (${properties.cllr_2_party})<p> 
      ${properties.cllr_3} (${properties.cllr_3_party}) </p>
    </div>
  </div>`

  layer.bindPopup(content)
}
const parliamentaryPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-address-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Parliamentary</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Parliamentary Constituency: ${feature.properties.name_short}</p>
      <p>MP: ${feature.properties.mp_name} (${feature.properties.mp_party})<br> 
    </div>
  </div>`

  layer.bindPopup(content)
}
const gpPopup = (feature, layer) => {
 
  const content = `<div class="smbc-map__item">
   <div class="smbc-map__item__header__block">
     <i class="fa fa-user-md smbc-map__item__header__block__icon" aria-hidden="true"></i>
     <span class="smbc-map__item__header__block__title">GP</span>
   </div>
   <div class="smbc-map__item__body">
     <p>Practice: ${feature.properties.practice_name}</p>
     <p>PCN: ${feature.properties.primary_care_network}</p>
     <p>Site Type: ${feature.properties.site_type}</p>
     <p>Shared Site: ${feature.properties.shared_site}</p>
     <p>Address: ${feature.properties.address}</p>
   </div>
 </div>`
  
  layer.bindPopup(content)
 }

export {
  FEC_Popup,
  area_committeePopup,
  police_neighbourhoodPopup,
  police_locality_Popup,
  police_beat_Popup,
  CCG_Localities_Popup,
  CCG_Neighbourhoods_Popup,
  LSOA_Popup,
  MSOA_Popup,
  Place_Neighbourhoods_Popup,
  wardPopup,
  parliamentaryPopup,
  gpPopup
}