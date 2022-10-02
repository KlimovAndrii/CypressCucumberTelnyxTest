import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import BringYourOwnCarrierPage from "../pages/BringYourOwnCarrie.page.js";
import SignUpPage from "../pages/SignUp.page.js";

describe('Bring Your Own Carrier page test', () => {
  before(() => { MainPage.visit(); });

  it('the Sign Up page should open from the Bring Your Own Carrier page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToResourcesMenu();
    MainPage.clickBringYourOwnCarrierLink();
    BringYourOwnCarrierPage.bringYourOwnCarrierHeader().should('be.visible');
    BringYourOwnCarrierPage.hoverToPageLogo();
    BringYourOwnCarrierPage.clickTryItFreeButton();
    SignUpPage.signUpHeader().should('be.visible');
  });
});