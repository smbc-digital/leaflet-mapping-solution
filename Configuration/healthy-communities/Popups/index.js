const libraryPopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Libraries</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Library: ${properties.facility_name}</p>
        <p>Address: ${properties.postal_address}</p>
        <p>Email: ${properties.email}</p>
        <p>Website: ${properties.url}</p>
    </div>
  </div>`
}

const leisurePopup = (properties) => {
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-heartbeat smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Leisure Centres</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Leisure Centre: ${properties.centre_name}</p>
        <p>Address: ${properties.address}</p>
        <p>Telephone: ${properties.telephone}</p>
        <p>Email: ${properties.email}</p>
        <p>Website: ${properties.url}</p>
    </div>
  </div>`
}

export {
  libraryPopup,
  leisurePopup
}