const CookiesHelper = require("../helpers/cookies.helper");
const MainPage = require("../pages/Main.page.js");
const AboutUsPage = require("../pages/AboutUs.page.js");
const CareersPage = require("../pages/Creers.page.js");

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