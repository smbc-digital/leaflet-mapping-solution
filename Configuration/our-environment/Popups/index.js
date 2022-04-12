const ecological_networks_corePopup = (feature, layer) => {
  
    const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">EN - Core</span>
      </div>
      <div class="smbc-map__item__body">
      </div>
    </div>`
   
    layer.bindPopup(content)
   }

const ecological_networks_linearPopup = (feature, layer) => {
  
   const content = `<div class="smbc-map__item">
      <div class="smbc-map__item__header__block">
        <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
        <span class="smbc-map__item__header__block__title">EN - Linear Corridor</span>
      </div>
      <div class="smbc-map__item__body">
      </div>
    </div>`
   
    layer.bindPopup(content)
   }

   const ecological_networks_stepping_stonesPopup = (feature, layer) => {
  
    const content = `<div class="smbc-map__item">
       <div class="smbc-map__item__header__block">
         <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
         <span class="smbc-map__item__header__block__title">EN - Stepping Stones</span>
       </div>
       <div class="smbc-map__item__body">
       </div>
     </div>`
    
     layer.bindPopup(content)
    }
  
    const national_character_areasPopup = (feature, layer) => {
  
      const content = `<div class="smbc-map__item">
         <div class="smbc-map__item__header__block">
           <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
           <span class="smbc-map__item__header__block__title">National Character Areas</span>
         </div>
         <div class="smbc-map__item__body">
         <p>Name: ${feature.properties.jcaname}</p>
         </div>
       </div>`
      
       layer.bindPopup(content)
      }
  
      
  export {
    ecological_networks_corePopup,
    ecological_networks_linearPopup,
    ecological_networks_stepping_stonesPopup,
    national_character_areasPopup

  }