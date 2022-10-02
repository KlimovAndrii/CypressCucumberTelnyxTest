import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import GlobalNumbersPage from "../pages/GlobalNumbers.page.js";
import SignUpPage from "../pages/SignUp.page.js";

describe('Global Numbers page test', () => {
  before(() => { MainPage.visit(); });

  it('the Sign Up page should open from the Global Numbers page', () => {
    CookiesHelper.acceptCookies();
    MainPage.talkToExpertButton().should('be.visible');
    MainPage.scrollIIntoGlobalNumbersLinkView();
    MainPage.clickGlobalNumbersLink();
    GlobalNumbersPage.globalNumbersHeader().should('be.visible');
    GlobalNumbersPage.clickClaimYourFreeTestingCreditButton();
    SignUpPage.signUpHeader().should('be.visible');
  });
});