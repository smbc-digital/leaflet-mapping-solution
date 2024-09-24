const structuresPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-cube smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Structure</span>
      </div>
      
      <div class="smbc-map__item__body">
      <p>Name: ${properties.structure_name}</p>
      <p>Type: ${properties.structure_type}</p>
      <p>Owner: ${properties.structure_owner}</p>
      <p>Structure Number: ${properties.structure_number}</p>
    <p><a href="https://www.stockport.gov.uk/start/report-damage-to-a-bridge-or-structure" target="_blank">Report Problem</a></p>
      
    </div>
  </div>`
}

 export {
  structuresPopup
}