const stockportHomesPopup = () => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Stockport Homes</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Please report via email to Stockport Homes <a href="mailto:neighbourhoods@stockporthomes.org">neighbourhoods@stockporthomes.org</a></p>
  </div>
</div>`
}

const reportTreePopup = (properties) => {
  if (!properties.nearest_street_layer)
    return null

  return`<input id="lat" name="lat" type="hidden" value="${properties.latlng.lat}">
      <input id="lng" name="lng" type="hidden" value="${properties.latlng.lng}">
      <input id="street" name="street" type="hidden" value="${properties.nearest_street_layer}">
      <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100" data-module="govuk-button">
      Report a problem
      </button>`
      //Report a tree @${properties.nearest_street_layer}
}

// Add the "fetch" outside of the popup function
reportTreePopup.fetch = (data) => {
  return fetch(`https://spatial.stockport.gov.uk/geoserver/wfs?&service=wfs&version=1.0.0&request=getfeature&typename=address:vw_get_street_and_layer&viewparams=long:${data.latlng.lng};lat:${data.latlng.lat};&outputformat=json`)
}

const nopopup = () => {
  return `
  <div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Private Land</span>
    </div>
    <div class="smbc-map__item__body">
      <p>This land is not owned by Stockport Council. Please contact the land owner</p>
    </div>
  </div>`
}

export {
  nopopup,
  reportTreePopup,
  stockportHomesPopup
}