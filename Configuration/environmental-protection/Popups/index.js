const smokecontrolareaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-smog smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Smoke Control Area</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Restrictions: ${feature.properties.restrictions}</p>
      <p>Source: ${feature.properties.source}</p>
      <p>Derived: ${feature.properties.derived}</p>
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
    <div class="smbc-map__item__body">
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const aqmaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Air Quality Management Area</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Notes: ${feature.properties.notes}</p>
  </div>
</div>`

  layer.bindPopup(content)
 }


export {
  smokecontrolareaPopup,greenbeltPopup,aqmaPopup
}