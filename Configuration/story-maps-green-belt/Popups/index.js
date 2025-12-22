const greenbeltPopup = (properties) => {
  
  return `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Green Belt</span>
    </div>
  </div>`
}


   const Borough1kmPopup = (properties) => {
 
    return `<div class="smbc-map__item">
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
   }

   export {
    greenbeltPopup,
    Borough1kmPopup
  }