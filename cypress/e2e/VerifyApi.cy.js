import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import VerifyApiPage from "../pages/VerifyApi.page.js";
import TalkToExpert from "../pages/TalkToExpert.page.js";

describe('Verify API page test', () => {
  before(() => { MainPage.visit(); });

  it('the Support page should open from the Verify API page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverTopricingMenu();
    MainPage.clickVerifyApiLink();
    VerifyApiPage.verifyApiPricingHeader().should('be.visible');
    VerifyApiPage.hoverToPageLogo();
    VerifyApiPage.scrollIntoTalkToSalesButton();
    VerifyApiPage.clickTalkToSalesButton();
    TalkToExpert.firstNameField().should('be.visible');
  });
});