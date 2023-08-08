const a34Popup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-car smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">A34 Improvement Areas</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Scheme Number: ${properties.scheme_no}</p>
        <p>Project Title: ${properties.project_title}</p>
        <p>Construction Status: ${properties.timescale}</p>
        <p>${properties.pdf_link}</p>
    </div>
  </div>`
}

export {a34Popup}