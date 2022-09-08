import { getFeatureInfo } from "./src/Helpers";

describe('Get Feature Info returns a popup', () => {

  var something = getFeatureInfo(null, null, null, null, null);

  it('is true', () => {
    expect(something).to.be.null
  })

})