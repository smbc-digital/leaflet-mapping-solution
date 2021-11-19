const airport_public_safety_zonePopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Airport Public Safety Zone</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const ancientmonumentPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-flag smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Ancient Monuments</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.name}</p>
      <p>National Monument No: ${feature.properties.national_monument_no}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 } 

 const conservationareaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-certificate smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Conservation Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>${feature.properties.cons_area}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const employmentareasPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-briefcase smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Employment Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Name: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const employmentproposedPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-briefcase smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Employment Proposed</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 } 

 const prowPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Definitive Rights of Way</span>
    </div>
    <div class="smbc-map__item__body">
      <p>PROW Number: ${feature.properties.row}</p>
      <p>Type: ${feature.properties.type}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const floodzonesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Flood Zones</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Risk Level: ${feature.properties.risk_level}</p>
      <p>Type: ${feature.properties.type}</p>
      <p>Source: ${feature.properties.source}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const greenbeltPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fab fa-pagelines smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Green Belt</span>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const greenbeltmedsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Green Belt MEDS</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const generalPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">General</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.tquniqueid}</p>
      <p>Policy: ${feature.properties.policy_1}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const greenchainPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Green Chain</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const gravel_aosPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-search smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Gravel</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const housingsitesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Housing Sites</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const landscapecharacterareaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Landscape Character Area</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const localnaturereservePopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Local Nature Reserve</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.reserve_na}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

const localopenspacePopup = (feature, layer) => {
  
const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Local Open Space</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
  
  layer.bindPopup(content)
}

const localwildlifesitesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fab fa-pagelines smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Local Wildlife Sites</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
   
  layer.bindPopup(content)
  }

const metrolinkcorridorPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-subway smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Metrolink Corridor</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Chapter: ${feature.properties.chapter}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
     
  layer.bindPopup(content)
  }

const m60gatewaysitesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">M60 Gateway Sites</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Chapter: ${feature.properties.chapter}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
     
  layer.bindPopup(content)
  }

const parkgardenofhistoricinterestPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Park or Garden of Historic Interest</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Site: ${feature.properties.site}</p>
    </div>
  </div>`
       
  layer.bindPopup(content)
  }

const pgasPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-file-alt smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Policy Guidance Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
       
  layer.bindPopup(content)
  }

const predominantlyresidentialPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Predominantly Residential Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>
  </div>`
         
  layer.bindPopup(content)
  }

const reliefroadcorridorPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Relief Road Corridor</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div> 
  </div>`
           
  layer.bindPopup(content)
  }

const sandaosPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-search smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sand - Area of Search</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>      
  </div>`
             
  layer.bindPopup(content)
  }

const sandgritaosPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-search smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sandstone/Gritstone - Area of Search</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>   
  </div>`
               
  layer.bindPopup(content)
  }

const shopfrontagesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-basket smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Shop Frontages</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.policyname}</p>
      <p>Policy: ${feature.properties.policysitename}</p>
    </div>           
  </div>`
                 
  layer.bindPopup(content)
  }

const shoppingtcPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-cart smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Shopping TC</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Area: ${feature.properties.shoppingareas}</p>
      <p>Policy: ${feature.properties.policy_1}</p>
    </div>          
  </div>`
                   
  layer.bindPopup(content)
  }

const shoppingareasPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-shopping-cart smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Shopping Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.policysitename}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>               
  </div>`
                     
  layer.bindPopup(content)
  }

const sbiPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sites of Biological Importance</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Site Name: ${feature.properties.site_name}</p>
      <p>Reference Number: ${feature.properties.reference_number}</p>
    </div>             
  </div>`
                       
  layer.bindPopup(content)
  }

const sssiPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-flask smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Sites of Special Scientific Interest</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Site Name: ${feature.properties.sssi_name}</p>
      <p>Site Name: ${feature.properties.sssi_area}</p>
      <p>Designation Status: ${feature.properties.designation_status}</p>
    </div>            
  </div>`
                         
  layer.bindPopup(content)
  }

const strategicopenspacePopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Strategic Open Space</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Policy: ${feature.properties.policy}</p>
    </div>               
  </div>`
                           
  layer.bindPopup(content)
  }

const strategicrecreationroutesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-bicycle smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Strategic Recreation Routes</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>                    
  </div>`
                             
  layer.bindPopup(content)
  }

const towncentreareasPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Town Centre Areas</span>
    </div>
    <div class="smbc-map__item__body">
      <p>ID: ${feature.properties.id}</p>
      <p>Name: ${feature.properties.name}</p>
      <p>Policy: ${feature.properties.policy}</p>
    </div>                      
  </div>`
                               
  layer.bindPopup(content)
  }

export {
  airport_public_safety_zonePopup,
  ancientmonumentPopup,
  conservationareaPopup,
  employmentareasPopup,
  employmentproposedPopup,
  prowPopup,
  floodzonesPopup,
  greenbeltPopup,
  greenbeltmedsPopup,
  generalPopup,
  greenchainPopup,
  gravel_aosPopup,
  housingsitesPopup,
  landscapecharacterareaPopup,
  localnaturereservePopup,
  localopenspacePopup,
  localwildlifesitesPopup,
  metrolinkcorridorPopup,
  m60gatewaysitesPopup,
  parkgardenofhistoricinterestPopup,
  pgasPopup,
  predominantlyresidentialPopup,
  reliefroadcorridorPopup,
  sandaosPopup,
  sandgritaosPopup,
  shopfrontagesPopup,
  shoppingtcPopup,
  shoppingareasPopup,
  sbiPopup,
  sssiPopup,
  strategicopenspacePopup,
  strategicrecreationroutesPopup,
  towncentreareasPopup
}