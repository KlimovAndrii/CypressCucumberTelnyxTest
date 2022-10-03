import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page';
import VerifyApiPage from "../../../pages/VerifyApi.page";
import TalkToExpert from "../../../pages/TalkToExpert.page";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Pricing' menu", () => {
  MainPage.hoverTopricingMenu();
});

Then("I click 'Verify API' link", () => {
  MainPage.clickVerifyApiLink();
});

Then("I shoul see 'API Pricing' page header", () => {
  VerifyApiPage.verifyApiPricingHeader().should('be.visible');
});

When("I hover to page logo", () => {
  VerifyApiPage.hoverToPageLogo();
});

Then("I scroll 'Talk To Sales' button", () => {
  VerifyApiPage.scrollIntoTalkToSalesButton();
});

Then("I click 'Talk To Sales' button", () => {
  VerifyApiPage.clickTalkToSalesButton();
});

Then("I should see 'Talk To Expert' page header", () => {
  TalkToExpert.firstNameField().should('be.visible');
});


