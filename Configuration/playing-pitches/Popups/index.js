const PlayingPitchesPopup = (feature, layer) => {
    const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-futbol-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Playing Pitches</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Site: ${feature.properties.sitename}</p>
    <p>Community Use: ${feature.properties.commuse}</p>
    <p>Status: ${feature.properties.status}</p>
  </div>
  </div>`

    layer.bindPopup(content)
}

const BowlingGreensPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Bowling Greens</span>
</div>
<div class="smbc-map__item__body">
  <p>Site: ${feature.properties.name}</p>
  <p>Type: ${feature.properties.type}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const GolfCoursesPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Golf Courses</span>
</div>
<div class="smbc-map__item__body">
  <p>Site: ${feature.properties.site_name}</p>
  <p>Type: ${feature.properties.type}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const AthleticsTracksPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Athletics Track</span>
</div>
<div class="smbc-map__item__body">
  <p>Site: ${feature.properties.name}</p>
  <p>Type: ${feature.properties.type}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const TennisCourtsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Tennis Courts</span>
</div>
<div class="smbc-map__item__body">
  <p>Site: ${feature.properties.name}</p>
  <p>Type: ${feature.properties.type}</p>
  <p>No. of Courts: ${feature.properties.no_of_courts}</p>
</div>
</div>`

  layer.bindPopup(content)
}

export {
  PlayingPitchesPopup,
  BowlingGreensPopup,
  GolfCoursesPopup,
  AthleticsTracksPopup,
  TennisCourtsPopup
}