const Borough1kmPopup = (feature, layer) => {
 
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
      <i class="fa fa-map-pin smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Map point</span>
    </div>
    <div class="smbc-map__item__body">
      <p class="smbc-map__item__header__block__title">
      </p>
    </div>
  
`

  //<button class="govuk-map-button govuk-button govuk-!-margin-bottom-0 smbc-!-width-100 comment-button" onclick="handleCommentButtonClick();" data-module="govuk-button">
  //Make comment
  //</button>

  layer.bindPopup(content)
}

const TownCentreBoundaryPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Town Centre Boundary</span>
    </div>
  </div>`
   
  layer.bindPopup(content)
}

const MainTownCentreUseAreaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-bag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Main Town Centre Use Area</span>
    </div>
  </div>`
   
  layer.bindPopup(content)
}

const TownCentreCharacterAreasPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-marker smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Town Centre Character Areas</span>
    </div>
    <div class="smbc-map__item__body">
    <p>${feature.properties.type} - ${feature.properties.area_name}</p>
    </div>`
   
  layer.bindPopup(content)
 }

 const TownCentreLivingAreaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Town Centre Living Area</span>
    </div>
  </div>`
   
  layer.bindPopup(content)
}

const PrimaryShoppingAreasPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-basket smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Primary Shopping Areas</span>
    </div>
    <div class="smbc-map__item__body">
    <p>${feature.properties.area}</p>
    </div>
  </div>`
   
  layer.bindPopup(content)
}

const DistrictCentresPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-basket smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">District Centres</span>
    </div>
    <div class="smbc-map__item__body">
    <p>${feature.properties.area}</p>
  </div>`
   
  layer.bindPopup(content)
}

const LocalCentresPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-basket smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">${feature.properties.type}</span>
    </div>
    <div class="smbc-map__item__body">
    <p>${feature.properties.policysitename}</p>
  </div>`
   
  layer.bindPopup(content)
}

// const ecological_networks_linearPopup = (feature, layer) => {
  
//    const content = `<div class="smbc-map__item">
//       <div class="smbc-map__item__header__block">
//         <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
//         <span class="smbc-map__item__header__block__title">EN - Linear Corridor</span>
//       </div>
//       <div class="smbc-map__item__body">
//       </div>
//     </div>`
   
//     layer.bindPopup(content)
//    }

//    const ecological_networks_stepping_stonesPopup = (feature, layer) => {
  
//     const content = `<div class="smbc-map__item">
//        <div class="smbc-map__item__header__block">
//          <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
//          <span class="smbc-map__item__header__block__title">EN - Stepping Stones</span>
//        </div>
//        <div class="smbc-map__item__body">
//        </div>
//      </div>`
    
//      layer.bindPopup(content)
//     }
  
//     const national_character_areasPopup = (feature, layer) => {
  
//       const content = `<div class="smbc-map__item">
//          <div class="smbc-map__item__header__block">
//            <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
//            <span class="smbc-map__item__header__block__title">National Character Areas</span>
//          </div>
//          <div class="smbc-map__item__body">
//          <p>Name: ${feature.properties.jcaname}</p>
//          </div>
//        </div>`
      
//        layer.bindPopup(content)
//       }
      
export {
  Borough1kmPopup,
  TownCentreBoundaryPopup,
  TownCentreCharacterAreasPopup,
  MainTownCentreUseAreaPopup,
  TownCentreLivingAreaPopup,
  PrimaryShoppingAreasPopup,
  DistrictCentresPopup,
  LocalCentresPopup
    // ecological_networks_linearPopup,
    // ecological_networks_stepping_stonesPopup,
    // national_character_areasPopup
  }