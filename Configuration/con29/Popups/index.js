const planningappsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.1 - Planning Applications</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Planning Application No.: ${feature.properties.refval}</p>
    <p>Address: ${feature.properties.address}</p>
    <p>App Type: ${feature.properties.application_type}</p>
    <p>Proposal: ${feature.properties.proposal}</p>
    <p>Decision: ${feature.properties.decision}</p>
    <p>Decision Date: ${feature.properties.decision_date}</p>
  </div>
</div>`
 
  layer.bindPopup(content)
 }

 const buildingregsapprovalPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.1 - Building Regulations Approval</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Application No.: ${feature.properties.refval}</p>
    <p>Address: ${feature.properties.address}</p>
    <p>App Type: ${feature.properties.app_type}</p>
    <p>Description: ${feature.properties.dscrpn}</p>
    <p>Decision: ${feature.properties.decision}</p>
    <p>Decision Date: ${feature.properties.decidd}</p>
  </div>
</div>`

  layer.bindPopup(content)
 }

 const buildingcertPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-certificate smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.1 - Building Certificates</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Application No.: ${feature.properties.refval}</p>
    <p>Address: ${feature.properties.address}</p>
    <p>Application Type: ${feature.properties.app_type}</p>
    <p>Description: ${feature.properties.dscrpn}</p>
    <p>Completion Cert Issued: ${feature.properties.compissd}</p>
  </div>
</div>`

  layer.bindPopup(content)
 }

const airport_public_safety_zonePopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-plane smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Airport Public Safety Zone</span>
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
    <i class="fa fa-flag smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Ancient Monuments</span>
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
    <i class="fa fa-certificate smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Conservation Areas</span>
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
    <i class="fa fa-briefcase smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Employment Areas</span>
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
    <i class="fa fa-briefcase smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Employment Proposed</span>
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
    <i class="fa fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q2.2 - Definitive Rights of Way</span>
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
    <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Flood Zones</span>
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
    <i class="fafa-pagelines smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Green Belt</span>
  </div>
</div>`

  layer.bindPopup(content)
 }

 const greenbeltmedsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-building-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Green Belt MEDS</span>
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
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - General</span>
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
    <i class="fa fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Green Chain</span>
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
    <i class="fa fa-search smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Gravel</span>
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
    <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Housing Sites</span>
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
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Landscape Character Area</span>
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
    <i class="fa fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Local Nature Reserve</span>
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
    <i class="fa fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Local Open Space</span>
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
    <i class="fa fa-pagelines smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Local Wildlife Sites</span>
  </div>
  <div class="smbc-map__item__body">
    <p>ID: ${feature.properties.id}</p>
    <p">Policy: ${feature.properties.policy}</p>
  </div>
</div>` 

  layer.bindPopup(content)
  }

const metrolinkcorridorPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-subway smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Metrolink Corridor</span>
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
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - M60 Gateway Sites</span>
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
    <i class="fa fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Park or Garden of Historic Interest</span>
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
    <i class="fa fa-file-text smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Policy Guidance Areas</span>
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
    <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Predominantly Residential Areas</span>
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
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Relief Road Corridor</span>
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
    <i class="fa fa-search smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Sand - Area of Search</span>
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
    <i class="fa fa-search smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Sandstone/Gritstone - Area of Search</span>
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
    <i class="fa fa-shopping-basket smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Shop Frontages</span>
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
    <i class="fa fa-shopping-cart smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Shopping TC</span>
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
    <i class="fa fa-shopping-cart smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Shopping Areas</span>
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
    <i class="fa fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Sites of Biological Importance</span>
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
    <i class="fa fa-flask smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Sites of Special Scientific Interest</span>
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
    <i class="fa fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Strategic Open Space</span>
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
    <i class="fa fa-bicycle smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Strategic Recreation Routes</span>
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
    <i class="fa fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Town Centre Areas</span>
  </div>
  <div class="smbc-map__item__body">
    <p>ID: ${feature.properties.id}</p>
    <p>Name: ${feature.properties.name}</p>
    <p>Policy: ${feature.properties.policy}</p>
  </div>
</div>`   
                               
  layer.bindPopup(content)
  }

const adopted_highwaysPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q2.1 - Adopted Highways</span>
  </div>
  <div class="smbc-map__item__body">
    <p>USRN: ${feature.properties.usrn}</p>
    <p>Street: ${feature.properties.street}</p>
  </div>
</div>`
                                 
  layer.bindPopup(content)
  }

const section38Popup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Section 38 Agreements</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }  

const privatestreetworksPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q2.1 - Private Streetworks</span>
  </div>
  <div class="smbc-map__item__body">
    <p>USRN: ${feature.properties.usrn}</p>
    <p>Street: ${feature.thorofare}</p>
  </div>
</div>`
                                  
  layer.bindPopup(content)
  }
  
const trunk200Popup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.4 - Trunk Road 200m Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Name: ${feature.properties.scheme_type}</p>
  <p>Scheme Description: ${feature.properties.short_description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }
  
const roadalterationsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.4 - Road Alterations</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.scheme_type}</p>
  <p>Details: ${feature.properties.short_description}</p>
  <p>Date for Completion: ${feature.properties.date_for_completion}</p>
  <p>Reference: ${feature.properties.unique_reference}</p>
  </div>
</div>`
                                      
  layer.bindPopup(content)
  }

  const threefourPopup = (feature, layer) => {
  
    const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Q3.4 - Road Alterations</span>
    </div>
    <div class="smbc-map__item__body">
    <p>Description: ${feature.properties.description}</p>
    </div>
  </div>`
                                        
    layer.bindPopup(content)
    }

const newroadPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.4 - New Road Construction</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.scheme_type}</p>
  <p>Details: ${feature.properties.short_description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const newroadconsultPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.4 - Proposed New Road Consultation</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Scheme Type: ${feature.properties.scheme_type}</p>
    <p>Short Description: ${feature.properties.short_description}</p>
  </div>
</div>`
                                          
  layer.bindPopup(content)
  }

const newrailwayPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-subway smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.5 - Proposed Rail Buffer</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Scheme Type: ${feature.properties.scheme}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const waitingPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Waiting or Loading Restrictions 200m Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.restriction_type}</p>
  <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
                                                
  layer.bindPopup(content)
  }

const onewayPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - One Way Traffic 200m Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.restriction_type}</p>
  <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
                                                  
  layer.bindPopup(content)
  }

const prohibitionofdrivingPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Prohibition of Driving 200m Buffer</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Scheme Type: ${feature.properties.restriction_type}</p>
    <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const pedestrianisationPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Pedestrianisation 200m Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.restriction_type}</p>
  <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
                                                      
  layer.bindPopup(content)
  }

const widthweightPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Width and Weight Restrictions 200m Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.restriction_type}</p>
  <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const trafficcalmingPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Traffic Calming Measures 200m Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.restriction_type}</p>
  <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const residentsparkingPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-car smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Resident Parking Controls Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.restriction_type}</p>
  <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const minorroadalterationsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Minor Road Alterations Buffer</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
                                                              
  layer.bindPopup(content)
  }

const cycletrackPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.6 - Cycle Track Buffer</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme Type: ${feature.properties.restriction_type}</p>
  <p>Short Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const stopnoticePopup = (feature, layer) => {
 
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.9 - Stop Notice</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Case Ref: ${feature.properties.casefulref}</p>
  </div>
</div>`
                                                                  
  layer.bindPopup(content)
  }

const listbuildingenfPopup = (feature, layer) => {
 
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.9 - Listed Building Enforcement Notice</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Case Ref: ${feature.properties.casefulref}</p>
  </div>
</div>`
                                                                    
  layer.bindPopup(content)
  }

const breachconditionPopup = (feature, layer) => {

  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.9 - Breach of Condition Notice</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Case Ref: ${feature.properties.casefulref}</p>
  </div>
</div>`
                                                                      
  layer.bindPopup(content)
  }

const planningcontraPopup = (feature, layer) => {

  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.9 - Planning Contravention Notice</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Case Ref: ${feature.properties.casefulref}</p>
  </div>
</div>`
                                                                        
  layer.bindPopup(content)
  }

const othernoticePopup = (feature, layer) => {

  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.9 - Other Notice</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Case Ref: ${feature.properties.casefulref}</p>
  </div>
</div>`
                                                                          
  layer.bindPopup(content)
  }

const tpoPopup = (feature, layer) => {

  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.9 - Tree Preservation Orders</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Status: ${feature.properties.status}</p>
  <p>Address: ${feature.properties.tpo_name}</p>
  <p>TPO Ref: ${feature.properties.tpo_number} ${feature.properties.tree_number}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const cpoPopup = (feature, layer) => {

  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.12 - Compulsory Purchase Orders</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Scheme: ${feature.properties.scheme_name}</p>
  <p>Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }

const radonPopup = (feature, layer) => {

  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.14 Radon Gas</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Class: ${feature.properties.class}</p>
  </div>
</div>`
                                                                                
  layer.bindPopup(content)
  }

  const enforcementnoticePopup = (feature, layer) => {

    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q3.9 Enforcement Notice</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Ref: ${feature.properties.refval}</p>
    <p>Address: ${feature.properties.address}</p>
    <p>Description: ${feature.properties.nature}</p>
    <p>Action: ${feature.properties.action}</p>    
  </div>
</div>`
    
    layer.bindPopup(content)
    }

export {
  planningappsPopup,
  buildingregsapprovalPopup, 
  buildingcertPopup,
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
  towncentreareasPopup,
  adopted_highwaysPopup, 
  section38Popup, 
  privatestreetworksPopup,
  trunk200Popup,
  roadalterationsPopup,
  newroadPopup,
  newroadconsultPopup,
  newrailwayPopup,
  waitingPopup,
  onewayPopup,
  prohibitionofdrivingPopup,
  pedestrianisationPopup,
  widthweightPopup,
  trafficcalmingPopup,
  residentsparkingPopup,
  minorroadalterationsPopup,
  //pedestriancrossingPopup,
  cycletrackPopup,
  stopnoticePopup,
  listbuildingenfPopup,
  breachconditionPopup,
  planningcontraPopup,
  othernoticePopup,
  tpoPopup,
  radonPopup,
  cpoPopup,
  enforcementnoticePopup,
  threefourPopup
}