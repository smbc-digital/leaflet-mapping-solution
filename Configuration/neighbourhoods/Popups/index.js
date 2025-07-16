
const primaryCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const primaryCatholicCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Catholic Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondaryCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondaryCatholicCatchmentPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-square-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary Catholic Catchment</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const primarySchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const primaryCatholicSchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Catholic School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondarySchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const secondaryCatholicSchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Secondary Catholic School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const specialSchoolPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-graduation-cap smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Special School</span>
    </div>
    <div class="smbc-map__item__body">
      <p>School: ${feature.properties.name}</p>
      <p>Address: ${feature.properties.postal_address}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const libraryPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Libraries</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Library: ${properties.facility_name}</p>
        <p>Address: ${properties.postal_address}</p>
        <p><a href="mailto:${properties.email}" target="_blank">Email</a></p>
        <p><a href="${properties.url}" target="_blank">Further Info</a></p>
    </div>
  </div>`
}

const carehomesPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Care Home</span>
    </div>
      <div class="smbc-map__item__body">
        <p>${properties.locationname}</p>
        <p>Rating: ${properties.overall_rating}</p>
        <p>Beds: ${properties.numberofbeds}</p>
        <p>Brand: ${properties.brandname}</p>
        <p>Address: ${properties.postaladdressline1}, ${properties.postalcode}</p>
        <p><a href="${properties.weblink}" target="_blank">CQC link</a></p>
    </div>
  </div>`
}

const parkrunPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa-solid fa-person-running smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Parkrun</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Name: ${properties.name}</p>
        <p><a href="${properties.link}" target="_blank">Further Info</a></p>
    </div>
  </div>`
}

const leisurePopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-heartbeat smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Leisure Centres</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Leisure Centre: ${properties.centre_name}</p>
        <p>Address: ${properties.address}</p>
        <p>Telephone: ${properties.telephone}</p>
        <p>Email: ${properties.email}</p>
        <p>Website: ${properties.url}</p>
    </div>
  </div>`
}

const pharmacyPopup = (properties) => {

  var services = properties.gm_minor_ailment_service === 'Yes' ? 'Minor Ailment Service' : ''
  if (services === '') {
    services = properties.emergency_hormonal_contraception === 'Yes' ? 'Emergency Hormonal Contraception' : ''
  } else {
    services += properties.emergency_hormonal_contraception === 'Yes' ? ', <br>Emergency Hormonal Contraception' : ''
  }
  
  if (services === '') {
    services = properties.needle_exchange_services === 'Yes' ? 'Needle Exchange' : ''
  } else {
    services += properties.needle_exchange_services === 'Yes' ? ', <br>Needle Exchange' : ''
  }

  if (services === '') {
    services = properties.stop_smoking_advanced === 'Yes' ? 'Stop Smoking Advanced Service' : ''
  } else {
    services += properties.stop_smoking_advanced === 'Yes' ? ', <br>Stop Smoking Advanced Service' : ''
  }

  if (services === '') {
    services = properties.supervised_consumption_services === 'Yes' ? 'Supervised Consumption' : ''
  } else {
    services += properties.supervised_consumption_services === 'Yes' ? ', <br>Supervised Consumption' : ''
  }

  if (services === '') {
    services = 'N/A'
  }

  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">  
    <i class="fa fa-plus-square smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Pharmacy</span>
  </div>
    <div class="smbc-map__item__body">
      <p>Name: ${properties.pharmacy_name}</p>
      <p>Address: ${properties.address}, ${properties.postcode}</p>
      <p>Services: <br>${services}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const Stock_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-file-text smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Stockport Homes</span>
</div>
<div class="smbc-map__item__body">
      <p>Ref: ${feature.properties.property_reference}</p>
      <p>Address: ${feature.properties.full_address}</p>
      <p>Type: ${feature.properties.property_type}</p>
      <p>Bedrooms: ${feature.properties.bedrooms}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const familyhubsPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-child smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Family Hub</span>
      </div>
      <div class="smbc-map__item__body">
      
      <p>${properties.name}</p>
      <a href="${properties.link}" target="_blank">Further Info</a>
    </div>
  </div>`
}



export {
  primaryCatchmentPopup,
  primaryCatholicCatchmentPopup,
  secondaryCatchmentPopup,
  secondaryCatholicCatchmentPopup,
  primarySchoolPopup,
  primaryCatholicSchoolPopup,
  secondarySchoolPopup,
  secondaryCatholicSchoolPopup,
  specialSchoolPopup,
  libraryPopup,
  leisurePopup,
  pharmacyPopup,
  Stock_Popup,
  parkrunPopup,
  familyhubsPopup,
  carehomesPopup
}
