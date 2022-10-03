import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import IntegrationsPage from "../../../pages/Integrations.page.js";
import MarketplacePage from "../../../pages/Marketplace.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I When I hover to 'Company' menu", () => {
  MainPage.hoverToCompanyMenu();
});

When("I click 'Integrations' link", () => {
  MainPage.clickIntegrationsLink();
});

When("I should see 'Telnyx To The Tools' header", () => {
  IntegrationsPage.connectTelnyxToTheToolsHeader().should('be.visible');
});

Then("I hover to page logo", () => {
  IntegrationsPage.hoverToPageLogo();
});

Then("I click 'Explore Our Marketplace' button", () => {
  IntegrationsPage.clickExploreOurMarketplaceButton();
});

Then("I should see 'Marketplace' header", () => {
  MarketplacePage.marketplaceHeader().should('be.visible');
});