import { getTargetUrl } from '../Helpers'

const gulliesActivePopup = feature => 
  `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-exclamation smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Location</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.street}</p>
      <input id="siteCode" name="siteCode" type="hidden" value="${feature.properties.site_code}">
      <input id="assetId" name="assetId" type="hidden" value="${feature.properties.central_asset_id}">
      <input id="easting" name="easting" type="hidden" value="${feature.properties.easting}">
      <input id="northing" name="northing" type="hidden" value="${feature.properties.northing}">
      <input id="street" name="street" type="hidden" value="${feature.properties.street}">
      <input id="lat" name="lat" type="hidden" value="${feature.geometry.coordinates[1]}">
      <input id="lng" name="lng" type="hidden" value="${feature.geometry.coordinates[0]}">
    </div>
    <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
    <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100" data-module="govuk-button">
        Report this drain
      </button>
  </div>`

  const gulliesFaultPopup = feature => 
  `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-exclamation smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Location</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.street}</p>
    </div>
    <div class="govuk-panel smbc-panel--error govuk-!-padding-1">
      <div class="smbc-panel__body smbc-!-font-color-white">
          A blocked drain has already been reported
      </div>
    </div>
    <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">
    <a class="govuk-button govuk-button--secondary govuk-!-margin-bottom-0 smbc-!-font-color-black smbc-!-width-100" href="${getTargetUrl()}/track-a-report/details/${feature.properties.ext_system_ref}">View this report</a>
    <a class="govuk-button govuk-!-margin-bottom-0 govuk-!-margin-top-4 smbc-!-width-100" href="https://www.stockport.gov.uk/">Go to the homepage</a>
  </div>`

const gulliesPopup = (feature, layer) => {
  var content = getcontent_gullies(feature)

  layer.bindPopup(content)
}

const currentGulliesPopup = feature => {
  var popup = gulliesActivePopup(feature)
  return popup
}

const getcontent_gullies = feature => {
  switch  (feature.properties.raise_new_job) {  
    case 1:
        return gulliesActivePopup(feature)
    //case 2:
        //return gulliesMaintenancePopup(feature)
    case 3:
        return gulliesFaultPopup(feature)
  }
}

export {
  gulliesPopup,
  currentGulliesPopup
}