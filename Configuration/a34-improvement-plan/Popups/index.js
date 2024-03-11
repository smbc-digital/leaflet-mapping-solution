const a34Popup = (properties) => {
  let popupContent = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-car smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">A34 Improvement Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Scheme Number: ${properties.scheme_number}</p>
      <p>Scheme Name: ${properties.scheme_name}</p>
      <p>Construction Status: ${properties.construction_status}</p>
      <br>PDF Documents:
      <p>${properties.dev_pdf_link}</p>`;
      
  if (properties.dev_pdf_link_2) {
    popupContent += `<p>${properties.dev_pdf_link_2}</p>`;
  }

  if (properties.dev_pdf_link_3) {
    popupContent += `<p>${properties.dev_pdf_link_3}</p>`;
  }

  popupContent += `</div>
  </div>`;
  
  return popupContent;
};

export {a34Popup};