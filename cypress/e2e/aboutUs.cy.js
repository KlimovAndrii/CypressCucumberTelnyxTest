import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import AboutUsPage from "../pages/AboutUs.page.js";
import CareersPage from "../pages/Creers.page.js";

describe('About Us page test', () => {
  before(() => { MainPage.visit(); });

  it('the Careers page should open from the About Us page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToCompanyMenu();
    MainPage.clickAboutTelnyxLink();
    AboutUsPage.aboutUsHeader().should('be.visible');
    AboutUsPage.hoverToPageLogo();
    AboutUsPage.scrollIntoSeeOpenJobsLink();
    AboutUsPage.clickSeeOpenJobsLink();
    CareersPage.careersHeader().should('be.visible');
  });
});