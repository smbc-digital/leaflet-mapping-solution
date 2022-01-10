import { getTargetUrl } from '../Helpers'

const illuminatedsignsActivePopup = feature => {
  
  return `<div class="smbc-map__item">
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
      <span class="smbc-map__item__header__block__title">Sign ID</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.feature_id}</p>  
    </div>
    <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
    <a class="govuk-button govuk-!-margin-bottom-1 govuk-!-width-full" href="lit-sign/fault-type?assetId=${feature.properties.central_asset_id}&siteCode=${feature.properties.site_code}">Report this sign</a>
  </div>`
}

const illuminatedsignsFaultPopup = feature => {
 const varName = getTargetUrl()
 let noOfDays = Math.floor(
   (new Date() - new Date(feature.properties.job_entry_date)) /
     (1000 * 3600 * 24)
 )
 let lastUpdated = Math.floor(
   (new Date() - new Date(feature.properties.logged_date)) / (1000 * 3600 * 24)
 )
 const defaultMessage = noOfDays
   ? `A fault with this sign was reported ${noOfDays} days ago`
   : 'A fault with this sign was reported'
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
<div class="smbc-map__item">
   <div class="smbc-map__item__header__block">
     <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
     <span class="smbc-map__item__header__block__title">Sign ID</span>
   </div>
   <div class="smbc-map__item__body">
     <p>${feature.properties.feature_id}</p>
   </div>
   <div class="govuk-panel smbc-panel--error govuk-!-padding-1">
       <div class="smbc-panel__body smbc-!-font-color-white">
       ${defaultMessage}
       </div>
     </div>  
   <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
   <a class="govuk-button govuk-button--secondary govuk-!-margin-bottom-0 smbc-!-font-color-black smbc-!-width-100" href="${varName}/track-a-report/details/${feature.properties.ext_system_ref}">View reported fault</a>
   <a class="govuk-button govuk-!-margin-bottom-0 govuk-!-margin-top-4 smbc-!-width-100" href="https://www.stockport.gov.uk/">Go to the homepage</a>
   ${showLastUpdated}
   <input id="siteCode" name="siteCode" type="hidden" value="${feature.properties.site_code}">
   <input id="assetId" name="assetId" type="hidden" value="${feature.properties.central_asset_id}">
   <input id="raiseNewJob" name="raiseNewJob" type="hidden" value="${feature.properties.raise_new_job}">
   <input id="ext_system_ref" name="ext_system_ref" type="hidden" value="${feature.properties.ext_system_ref}">
</div>`

}

const illuminatedsignsMaintenancePopup = feature => {
 const message =
   feature.properties.message ??
   'This sign is part of a maintenance programme and will be fixed without a need to report'

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
     <span class="smbc-map__item__header__block__title">Sign ID</span>
   </div>
   <div class="smbc-map__item__body">
     <p>${feature.properties.feature_id}</p> 
 </div>
 <div class="govuk-panel smbc-panel--warning govuk-!-padding-1">
    <div class="smbc-panel__body smbc-!-font-color-white">
    ${message}
    </div>
</div>`
}

const illuminatedsignsPopup = (feature, layer) => {
  var content = getcontent_litsigns(feature)

  layer.bindPopup(content)
}

const getcontent_litsigns = feature => {
  switch  (feature.properties.raise_new_job) {  
    case 1:
        return illuminatedsignsActivePopup(feature)
    case 2:
        return illuminatedsignsMaintenancePopup(feature)
    case 3:
        return illuminatedsignsFaultPopup(feature)    
  }
}

const illuminatedbollardsActivePopup = feature => {
  
  return `<div class="smbc-map__item">
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
      <span class="smbc-map__item__header__block__title">Number on Bollard</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.feature_id}</p>
    </div>
    <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
    <a class="govuk-button govuk-!-margin-bottom-1 govuk-!-width-full" href="lit-bollard/fault-type?assetId=${feature.properties.central_asset_id}&siteCode=${feature.properties.site_code}">Report this bollard</a>
  </div>`
}

const illuminatedbollardsFaultPopup = feature => {
 const varName = getTargetUrl()
 let noOfDays = Math.floor(
   (new Date() - new Date(feature.properties.job_entry_date)) /
     (1000 * 3600 * 24)
 )
 let lastUpdated = Math.floor(
   (new Date() - new Date(feature.properties.logged_date)) / (1000 * 3600 * 24)
 )
 const defaultMessage = noOfDays
   ? `A fault with this lit bollard was reported ${noOfDays} days ago`
   : 'A fault with this lit bollard was reported'
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
<div class="smbc-map__item">
   <div class="smbc-map__item__header__block">
     <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
     <span class="smbc-map__item__header__block__title">Sign ID</span>
   </div>
   <div class="smbc-map__item__body">
     <p>${feature.properties.feature_id}</p>
   </div>
   <div class="govuk-panel smbc-panel--error govuk-!-padding-1">
       <div class="smbc-panel__body smbc-!-font-color-white">
       ${defaultMessage}
       </div>
     </div> 
   <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
   <a class="govuk-button govuk-button--secondary govuk-!-margin-bottom-0 smbc-!-font-color-black smbc-!-width-100" href="${varName}/track-a-report/details/${feature.properties.ext_system_ref}">View reported fault</a>
   <a class="govuk-button govuk-!-margin-bottom-0 govuk-!-margin-top-4 smbc-!-width-100" href="https://www.stockport.gov.uk/">Go to the homepage</a>  
   ${showLastUpdated}
</div>`
}

const illuminatedbollardsMaintenancePopup = feature => {
 const message =
   feature.properties.message ??
   'This bollard is part of a maintenance programme and will be fixed without a need to report'

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
     <span class="smbc-map__item__header__block__title">Number on bollard</span>
   </div>
   <div class="smbc-map__item__body">
     <p>${feature.properties.feature_id}</p>
 </div>
 <div class="govuk-panel smbc-panel--warning govuk-!-padding-1">
    <div class="smbc-panel__body smbc-!-font-color-white">
    ${message}
    </div>
</div>`

}

const illuminatedbollardsPopup = (feature, layer) => {
  var content = getcontent_litbollards(feature)

  layer.bindPopup(content)
}

const getcontent_litbollards = feature => {
  switch  (feature.properties.raise_new_job) {  
    case 1:
        return illuminatedbollardsActivePopup(feature)
    case 2:
        return illuminatedbollardsMaintenancePopup(feature)
    case 3:
        return illuminatedbollardsFaultPopup(feature)    
  }
}

export {

  illuminatedsignsPopup,
  illuminatedbollardsPopup
  
}