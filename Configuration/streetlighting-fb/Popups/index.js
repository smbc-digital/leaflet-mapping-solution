import { getTargetUrl } from '../Helpers'

const streetlightActivePopup = feature => {
  
  return `
  <div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Location</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.location_description}</p>
      <input id="siteCode" name="siteCode" type="hidden" value="${feature.properties.site_code}">
      <input id="assetId" name="assetId" type="hidden" value="${feature.properties.central_asset_id}">
    </div>
  </div>
  <div class="smbc-map__item"> 
    <div class="smbc-map__item__header__block">
      <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Number on street light</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.feature_id}</p>  
    </div>
    <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
    <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100" data-module="govuk-button">
      Report this street light
    </button>
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

  return `
  <div class="smbc-map__item">
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

const streetlightMaintenancePopup = feature => {
  const message =
    feature.properties.message ??
    'This street light is part of a maintenance programme and will be fixed without a need to report'

  return`
  <div class="smbc-map__item">
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
    </div>
    <div class="govuk-panel smbc-panel--warning govuk-!-padding-1">
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