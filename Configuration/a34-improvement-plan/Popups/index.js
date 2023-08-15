const a34Popup = (properties) => {
  let popupContent = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-car smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">A34 Improvement Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Scheme Number: ${properties.scheme_no}</p>
      <p>Project Title: ${properties.project_title}</p>
      <p>Construction Status: ${properties.timescale}</p>
      <br>PDF Documents:
      <p>${properties.dev_pdf_link}</p>
      <p>${properties.con_pdf_link_1}</p>`;
      
  if (properties.con_pdf_link_2) {
    popupContent += `<p>${properties.con_pdf_link_2}</p>`;
  }

  if (properties.con_pdf_link_3) {
    popupContent += `<p>${properties.con_pdf_link_3}</p>`;
  }

  if (properties.con_pdf_link_4) {
    popupContent += `<p>${properties.con_pdf_link_4}</p>`;
  }

  if (properties.con_pdf_link_5) {
    popupContent += `<p>${properties.con_pdf_link_5}</p>`;
  }

  popupContent += `</div>
  </div>`;
  
  return popupContent;
};

export {a34Popup};