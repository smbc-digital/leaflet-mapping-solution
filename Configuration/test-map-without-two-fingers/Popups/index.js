const leisurecentresPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-heart smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Leisure Centres</span>
</div>
<div class="smbc-map__item__body">
  <a href="${feature.properties.url}" target="_blank">${feature.properties.centre_name}</a>
  <p>Address: ${feature.properties.address}</p>
  <p>Tel: ${feature.properties.telephone}</p>
  <a href="mailto:${feature.properties.email}" target="_blank">Email Leisure Centre</a>
</div>
</div>`

  layer.bindPopup(content)
}

const prowPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Public Right of Way</span>
</div>
<div class="smbc-map__item__body">
<p>PROW Number: ${feature.properties.row}</p>
<p>Type: ${feature.properties.type}</p>
</div>
</div>`
    
    layer.bindPopup(content)
}

const Conservation_area_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Conservation Area</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.cons_area}</p>
    <a href="${feature.properties.web_info_link}" target="_blank">Further Information</a>
    </div>
    </div>`

  layer.bindPopup(content)
}


export {
  leisurecentresPopup, prowPopup, Conservation_area_Popup
}