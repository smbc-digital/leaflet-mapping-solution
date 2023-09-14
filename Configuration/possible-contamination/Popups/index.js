const radonPopup = (properties) => {
  let likelihood = "";

  if (properties.class_max === 1) {
      likelihood = "0 - 1%";
  } else if (properties.class_max === 2) {
      likelihood = "1 - 3%";
  } else if (properties.class_max === 3) {
      likelihood = "3 - 5%";
  } else if (properties.class_max === 4) {
      likelihood = "5 - 10%";
  } else if (properties.class_max === 5) {
      likelihood = "10 - 30%";
  } else {
      likelihood = "30 - 100%";
  }

  let popupContent = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-exclamation-triangle smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Radon Gas Potential</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Class: ${properties.class_max}</p>
      <p>Band (Likelihood of dwelling exceeding action level):<br> ${likelihood}</p>
    </div>
  </div>`;

  return popupContent;
};

export { radonPopup };
