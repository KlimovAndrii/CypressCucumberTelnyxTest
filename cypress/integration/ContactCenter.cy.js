import MainPage from '../pages/Main.page.js';
import ContactCentrePage from '../pages/ContactCentre.page.js';
import TalkToExpertPage from '../pages/TalkToExpert.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Contact Centre page test', () => {
  before(() => { MainPage.visit(); });

  it('the Support page should open from the Contact Centre page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToSolutionMenu();
    MainPage.clickContactCentreLink();
    ContactCentrePage.contactCentreSolutionHeader().should('be.visible');
    ContactCentrePage.hoverToPageLogo();
    ContactCentrePage.scrollIntoJoinTheIndustryLeadersButton();
    ContactCentrePage.clickJoinTheIndustryLeadersButton();
    TalkToExpertPage.firstNameField().should('be.visible');
  });
});