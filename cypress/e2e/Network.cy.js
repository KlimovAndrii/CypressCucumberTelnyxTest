import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import NetworkPage from "../pages/Network.page.js";
import PricingPage from "../pages/Pricing.page.js";

describe('Network page test', () => {
  before(() => { MainPage.visit(); });

  it('the Pricing page should open from the Network page', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickNetworkLink();
    NetworkPage.networkPageHeader().should('be.visible');
    NetworkPage.scrollIntoSeeOurPricingButton();
    NetworkPage.clickSeeOurPricingButton();
    PricingPage.pricingPageHeader().should('be.visible');
  });
});