import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import SmsApiPage from "../pages/SmsAPI.page.js";
import TalkToExpertPage from "../pages/TalkToExpert.page.js";

describe('SMS API page test', () => {
  before(() => { MainPage.visit(); });

  it('the Support page should open from the SMS API page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverTopricingMenu();
    MainPage.clickSmsApiLink();
    SmsApiPage.messagingPricingHeader().should('be.visible');
    SmsApiPage.hoverToPageLogo();
    SmsApiPage.scrollIntoTalkToSalesButton();
    SmsApiPage.clickTalkToSalesButton();
    TalkToExpertPage.firstNameField().should('be.visible');
  });
});