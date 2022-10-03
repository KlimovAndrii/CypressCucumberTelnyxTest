import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import NetworkPage from "../../../pages/Network.page.js";
import PricingPage from "../../../pages/Pricing.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I click 'Network' link", () => {
  MainPage.clickNetworkLink();
});

When("I should see 'Network' page header", () => {
  NetworkPage.networkPageHeader().should('be.visible');
});

When("I scroll to 'See Our Pricing' button", () => {
  NetworkPage.scrollIntoSeeOurPricingButton();
});

Then("I click 'See Our Pricing' button", () => {
  NetworkPage.clickSeeOurPricingButton();
});

Then("I should see 'Pricing' page header", () => {
  PricingPage.pricingPageHeader().should('be.visible');
});
