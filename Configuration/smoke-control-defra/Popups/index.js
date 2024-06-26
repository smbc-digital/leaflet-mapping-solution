const smokecontrolareaPopup = (properties) => {
  return(`<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-smog smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Smoke Control Order</span>
    </div>
    <div class="smbc-map__item__body">
        <p>Code: ${properties.code}</p>
        <p><a href="${properties.doc_link}" target="_blank">Original document</a></p>
        <p><a href="${properties.map_link}" target="_blank">Original map</a></p>
      </div>
      </div>`
    )
  }

export {
  smokecontrolareaPopup
}