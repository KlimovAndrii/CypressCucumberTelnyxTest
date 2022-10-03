import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import SalvingCalculatorPage from "../pages/SalvingCalculator.page.js";
import SignUpPage from "../pages/SignUp.page.js";

describe('Savings Calculator page test', () => {
  before(() => { MainPage.visit(); });

  it('the Sign Up page should open from the Savings Calculator page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToResourcesMenu();
    MainPage.clickSavingsCalculatorLink();
    SalvingCalculatorPage.salvingCalculatorPageHeader().should('be.visible');
    SalvingCalculatorPage.hoverToPageLogo();
    SalvingCalculatorPage.scrollIntoStartYourFreeTrialButton();
    SalvingCalculatorPage.clickStartYourFreeTrialButton();
    SignUpPage.signUpHeader().should('be.visible');
  });
});