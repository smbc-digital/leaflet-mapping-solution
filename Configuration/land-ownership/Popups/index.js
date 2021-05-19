const Land_Ownership_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-image"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Committee: ${feature.properties.committee_new}</p>
    <p class="info">Title Number: ${feature.properties.titlenumber}</p>
    </div>`
  layer.bindPopup(content)
}
const Leases_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-file-text"></i><p class="title">Leases</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    </div>`
  layer.bindPopup(content)
}
const Assets_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-home"></i><p class="title">Council Owned Property Assets</p>
    <p></p>
    <p class="info">Name: ${feature.properties.epims_property_name}</p>
    <p class="info">UPRN: ${feature.properties.epims_uprn}</p>
    </div>`
  layer.bindPopup(content)
}
export {
  Land_Ownership_Popup,
  Leases_Popup,
  Assets_Popup
}