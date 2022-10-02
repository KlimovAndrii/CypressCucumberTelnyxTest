import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import ResourceHubPage from "../pages/ResourceHub.page.js";
import SignUpPage from "../pages/SignUp.page.js";
import SmsCompleteGuidePage from "../pages/SmsCompleteGuide.page.js";

describe('Resource Hub page test', () => {
  before(() => { MainPage.visit(); });

  it('the Sign Up page should open from the SMS Guide page', () => {
    CookiesHelper.acceptCookies();
    MainPage.talkToExpertButton().should('be.visible');
    MainPage.scrollIntoResourceHubLinkView();
    MainPage.clickResourceHubLink();
    ResourceHubPage.resourceHubHeader().should('be.visible');
    ResourceHubPage.clickSmsGuideButton();
    SmsCompleteGuidePage.smsCompleteGuideHeader().should('be.visible');
    SmsCompleteGuidePage.clickSignUpButton();
    SignUpPage.signUpHeader().should('be.visible');
  });
});