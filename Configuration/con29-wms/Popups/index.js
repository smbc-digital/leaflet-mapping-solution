const buildingregsapprovalPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.1 - Building Regulations Approval</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Application No.: ${properties.refval}</p>
    <p>Address: ${properties.address}</p>
    <p>App Type: ${properties.app_type}</p>
    <p>Description: ${properties.dscrpn}</p>
    <p>Decision: ${properties.decision}</p>
    <p>Decision Date: ${properties.decidd}</p>
  </div>
</div>`
}

const buildingcertPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-certificate smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.1 - Building Certificates</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Application No.: ${properties.refval}</p>
    <p>Address: ${properties.address}</p>
    <p>Application Type: ${properties.app_type}</p>
    <p>Description: ${properties.dscrpn}</p>
    <p>Completion Cert Issued: ${properties.compissd}</p>
  </div>
</div>`
}

const conservationareaPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-certificate smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Conservation Areas</span>
  </div>
  <div class="smbc-map__item__body">
    <p>${properties.cons_area}</p>
  </div>
</div>`
}

const floodzonesPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-tint smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Flood Zones</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Risk Level: ${properties.risk_level}</p>
    <p>Type: ${properties.type}</p>
    <p>Source: ${properties.source}</p>
  </div>
</div>`
}

const greenbeltPopup = () => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fafa-pagelines smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Green Belt</span>
  </div>
</div>`
}

const greenbeltmedsPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-building-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Green Belt MEDS</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${properties.name}</p>
    <p>Policy: ${properties.policy}</p>
  </div>
</div>`
}

const generalPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - General</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${properties.tquniqueid}</p>
    <p>Policy: ${properties.policy_1}</p>
  </div>
</div>`
}

const greenchainPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-leaf smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Green Chain</span>
  </div>
  <div class="smbc-map__item__body">
  <p>ID: ${properties.id}</p>
  <p>Policy: ${properties.policy}</p>
  </div>
</div>`
}

const gravel_aosPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-search smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Gravel</span>
  </div>
  <div class="smbc-map__item__body">
    <p>ID: ${properties.id}</p>
    <p>Name: ${properties.name}</p>
    <p>Policy: ${properties.policy}</p>
  </div>
</div>`
}

const housingsitesPopup = (properties) => {
  return `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Housing Sites</span>
  </div>
  <div class="smbc-map__item__body">
  <p>ID: ${properties.id}</p>
  <p>Name: ${properties.name}</p>
  <p>Policy: ${properties.policy}</p>
  </div>
</div>`
}

 const landscapecharacterareaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Q1.2 - Landscape Character Area</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${properties.name}</p>
    <p>Policy: ${properties.policy}</p>
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
    <p>Name: ${properties.reserve_na}</p>
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
    <p>ID: ${properties.id}</p>
    <p>Name: ${properties.name}</p>
    <p>Policy: ${properties.policy}</p>
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
    <p>ID: ${properties.id}</p>
    <p">Policy: ${properties.policy}</p>
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
    <p>Chapter: ${properties.chapter}</p>
    <p>Policy: ${properties.policy}</p>
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
  <p>Chapter: ${properties.chapter}</p>
  <p>Name: ${properties.name}</p>
  <p>Policy: ${properties.policy}</p>
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
    <p>Site: ${properties.site}</p>
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
  <p>ID: ${properties.id}</p>
  <p>Name: ${properties.name}</p>
  <p>Policy: ${properties.policy}</p>
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
  <p>ID: ${properties.id}</p>
  <p>Name: ${properties.name}</p>
  <p>Policy: ${properties.policy}</p>
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
  <p>ID: ${properties.id}</p>
  <p>Name: ${properties.name}</p>
  <p>Policy: ${properties.policy}</p>
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
  <p>ID: ${properties.id}</p>
  <p>Name: ${properties.name}</p>
  <p>Policy: ${properties.policy}</p>
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
  <p>ID: ${properties.id}</p>
  <p>Name: ${properties.name}</p>
  <p>Policy: ${properties.policy}</p>
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
    <p>ID: ${properties.id}</p>
    <p>Name: ${properties.policyname}</p>
    <p>Policy: ${properties.policysitename}</p>
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
    <p>Area: ${properties.shoppingareas}</p>
    <p>Policy: ${properties.policy_1}</p>
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
  <p>Name: ${properties.policysitename}</p>
  <p>Policy: ${properties.policy}</p>
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
  <p>Site Name: ${properties.site_name}</p>
  <p>Reference Number: ${properties.reference_number}</p>
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
    <p>Site Name: ${properties.sssi_name}</p>
    <p>Site Name: ${properties.sssi_area}</p>
    <p>Designation Status: ${properties.designation_status}</p>
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
   <p>Policy: ${properties.policy}</p>
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
    <p>ID: ${properties.id}</p>
    <p>Policy: ${properties.policy}</p>
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
    <p>ID: ${properties.id}</p>
    <p>Name: ${properties.name}</p>
    <p>Policy: ${properties.policy}</p>
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
    <p>USRN: ${properties.usrn}</p>
    <p>Street: ${properties.street}</p>
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
  <p>Description: ${properties.description}</p>
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
    <p>USRN: ${properties.usrn}</p>
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
  <p>Scheme Name: ${properties.scheme_type}</p>
  <p>Scheme Description: ${properties.short_description}</p>
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
  <p>Scheme Type: ${properties.scheme_type}</p>
  <p>Details: ${properties.short_description}</p>
  <p>Date for Completion: ${properties.date_for_completion}</p>
  <p>Reference: ${properties.unique_reference}</p>
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
    <p>Description: ${properties.description}</p>
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
  <p>Scheme Type: ${properties.scheme_type}</p>
  <p>Details: ${properties.short_description}</p>
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
    <p>Scheme Type: ${properties.scheme_type}</p>
    <p>Short Description: ${properties.short_description}</p>
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
    <p>Scheme Type: ${properties.scheme}</p>
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
  <p>Scheme Type: ${properties.restriction_type}</p>
  <p>Short Description: ${properties.description}</p>
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
  <p>Scheme Type: ${properties.restriction_type}</p>
  <p>Short Description: ${properties.description}</p>
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
    <p>Scheme Type: ${properties.restriction_type}</p>
    <p>Short Description: ${properties.description}</p>
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
  <p>Scheme Type: ${properties.restriction_type}</p>
  <p>Short Description: ${properties.description}</p>
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
  <p>Scheme Type: ${properties.restriction_type}</p>
  <p>Short Description: ${properties.description}</p>
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
  <p>Scheme Type: ${properties.restriction_type}</p>
  <p>Short Description: ${properties.description}</p>
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
  <p>Scheme Type: ${properties.restriction_type}</p>
  <p>Short Description: ${properties.description}</p>
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
    <p>Short Description: ${properties.description}</p>
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
  <p>Scheme Type: ${properties.restriction_type}</p>
  <p>Short Description: ${properties.description}</p>
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
  <p>Case Ref: ${properties.casefulref}</p>
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
  <p>Case Ref: ${properties.casefulref}</p>
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
  <p>Case Ref: ${properties.casefulref}</p>
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
  <p>Case Ref: ${properties.casefulref}</p>
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
  <p>Case Ref: ${properties.casefulref}</p>
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
  <p>Status: ${properties.status}</p>
  <p>Address: ${properties.tpo_name}</p>
  <p>TPO Ref: ${properties.tpo_number} ${properties.tree_number}</p>
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
  <p>Scheme: ${properties.scheme_name}</p>
  <p>Description: ${properties.description}</p>
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
  <p>Class: ${properties.class}</p>
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
    <p>Ref: ${properties.refval}</p>
    <p>Address: ${properties.address}</p>
    <p>Description: ${properties.nature}</p>
    <p>Action: ${properties.action}</p>    
  </div>
</div>`
    
    layer.bindPopup(content)
    }

export {
  buildingregsapprovalPopup, 
  buildingcertPopup,
  conservationareaPopup,
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