import MainPage from '../pages/Main.page.js';
import TalkToExpertPage from '../pages/TalkToExpert.page.js';
import BusinessToConsumerBrandsPage from '../pages/BusinesConsumerBrands.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Business to Consumer Brands page test', () => {
  before(() => { MainPage.visit(); });

  it('the Support page should open from the Business Consumer Brands page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToSolutionMenu();
    MainPage.clickBusinessConsumerBrandLink();
    BusinessToConsumerBrandsPage.businessToConsumerBrandsHeader().should('be.visible');
    BusinessToConsumerBrandsPage.hoverToPageLogo();
    BusinessToConsumerBrandsPage.scrollIntoGetInTouchWithOurExpertsButton();
    BusinessToConsumerBrandsPage.clickGetInTouchWithOurExpertsButton();
    TalkToExpertPage.firstNameField().should('be.visible');
  });
});