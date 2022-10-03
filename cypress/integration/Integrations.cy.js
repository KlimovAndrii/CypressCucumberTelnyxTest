import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import IntegrationsPage from "../pages/Integrations.page.js";
import MarketplacePage from "../pages/Marketplace.page.js";

describe('Integrations page test', () => {
  before(() => { MainPage.visit(); });

  it('the Marketplace page should open from the Integrations page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToCompanyMenu();
    MainPage.clickIntegrationsLink();
    IntegrationsPage.connectTelnyxToTheToolsHeader().should('be.visible');
    IntegrationsPage.hoverToPageLogo();
    IntegrationsPage.clickExploreOurMarketplaceButton();
    MarketplacePage.marketplaceHeader().should('be.visible');
  });
});