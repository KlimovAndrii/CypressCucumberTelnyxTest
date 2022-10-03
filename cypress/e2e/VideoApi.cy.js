import MainPage from '../pages/Main.page.js';
import VideoApiPage from '../pages/VideoApi.page.js';
import LogInPage from '../pages/LogIn.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Video API page test', () => {
  before(() => { MainPage.visit(); });

  it('the Log In page should open from the Viedo API page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToProductsMenu();
    MainPage.clickVideoApiLink();
    VideoApiPage.getStartedButton().should('be.visible');
    VideoApiPage.hoverToPageLogo();
    VideoApiPage.clickGetStartedButton();
    LogInPage.inputEmailField().should('be.visible');
  });
});