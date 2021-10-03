import { getTargetUrl } from '../Helpers'

const streetlightActivePopup = feature => {
  
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Location</span>
  </div>
  <div class="smbc-map__item__body">
    <p>${feature.properties.location_description}</p>
  </div>
</div>
<div class="smbc-map__item govuk-grid-column-full"> 
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Number on street light</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.feature_id}</p>  
        <a class="govuk-button govuk-!-margin-bottom-1" href="report-an-issue/fault-type?assetId=${feature.properties.central_asset_id}&siteCode=${feature.properties.site_code}">Report this street light</a>
    </div>
  </div>`
}

const streetlightFaultPopup = feature => {
 const varName = getTargetUrl()
 let noOfDays = Math.floor(
   (new Date() - new Date(feature.properties.job_entry_date)) /
     (1000 * 3600 * 24)
 )
 let lastUpdated = Math.floor(
   (new Date() - new Date(feature.properties.logged_date)) / (1000 * 3600 * 24)
 )
 const defaultMessage = noOfDays
   ? `A fault with this street light was reported ${noOfDays} days ago`
   : 'A fault with this street light was reported'
 const showLastUpdated = lastUpdated
   ? `<p class="smbc-!-align-center">Last updated ${lastUpdated} days ago</p>`
   : ''

 return `<div class="smbc-map__item">
 <div class="smbc-map__item__header__block">
   <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
   <span class="smbc-map__item__header__block__title">Location</span>
 </div>
 <div class="smbc-map__item__body">
   <p>${feature.properties.location_description}</p>
 </div>
</div>
<div class="smbc-map__item govuk-grid-column-full">
   <div class="smbc-map__item__header__block">
     <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
     <span class="smbc-map__item__header__block__title">Number on street light</span>
   </div>
   <div class="smbc-map__item__body">
     <p>${feature.properties.feature_id}</p>
     <div class="govuk-panel smbc-panel--error govuk-!-padding-1">
       <div class="smbc-panel__body smbc-!-font-color-white">
       ${defaultMessage}
       </div>
     </div>
       <a class="govuk-button govuk-!-margin-bottom-1" href="${varName}/track-a-report/details/${feature.properties.ext_system_ref}">View reported fault</a>
     ${showLastUpdated}
   </div>
   </div>`

}

const streetlightMaintenancePopup = feature => {
 const message =
   feature.properties.message ??
   'This street light is part of a maintenance programme and will be fixed without a need to report'

 return`<div class="smbc-map__item">
 <div class="smbc-map__item__header__block">
   <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
   <span class="smbc-map__item__header__block__title">Location</span>
 </div>
 <div class="smbc-map__item__body">
   <p>${feature.properties.location_description}</p>
 </div>
</div>
<div class="smbc-map__item">
   <div class="smbc-map__item__header__block">
     <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
     <span class="smbc-map__item__header__block__title">Number on street light</span>
   </div>
   <div class="smbc-map__item__body">
     <p>${feature.properties.feature_id}</p>
     <div class="govuk-panel smbc-panel--error govuk-!-padding-1">
       <div class="smbc-panel__body smbc-!-font-color-white">
       ${message}
       </div>
   </div>
 </div>`

}

const streetLightingPopup = (feature, layer) => {
  var content = getcontent_streetlights(feature)

  layer.bindPopup(content)
}

const getcontent_streetlights = feature => {
  switch  (feature.properties.raise_new_job) {  
    case 1:
        return streetlightActivePopup(feature)
    case 2:
        return streetlightMaintenancePopup(feature)
    case 3:
        return streetlightFaultPopup(feature)    
  }
}

export {
  streetLightingPopup 
}