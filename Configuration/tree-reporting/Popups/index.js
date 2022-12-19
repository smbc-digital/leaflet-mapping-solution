const stockportHomesPopup = () => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Stockport Homes</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Please report via email to Stockport homes <a href="mailto:Neighbourhoods@stockporthomes.org">Neighbourhoods@stockporthomes.org</a></p>
  </div>
</div>`
}

const reportTreePopup = (properties) => {
  reportTreePopup.fetch = (data) => {
    return fetch(`https://spatial.stockport.gov.uk/geoserver/wfs?&service=wfs&version=1.0.0&request=getfeature&typename=address:vw_get_street_and_layer&viewparams=long:${data.latlng.lng};lat:${data.latlng.lat};&outputformat=json`)
  }

  return`<input id="lat" name="lat" type="hidden" value="${properties.latlng.lat}">
      <input id="lng" name="lng" type="hidden" value="${properties.latlng.lng}">
      <input id="street" name="street" type="hidden" value="${properties.nearest_street_layer}">
      <button class="govuk-button govuk-!-margin-bottom-0 smbc-!-width-100" data-module="govuk-button">
        Report a tree
      </button>`
}

const nopopup = () => {
  return `
  <div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-warning smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Alert</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Private land</p>
    </div>
  </div>`
}

export {
  nopopup,
  reportTreePopup,
  stockportHomesPopup
}