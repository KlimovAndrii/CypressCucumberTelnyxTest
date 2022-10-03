import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import SmsApiPage from "../../../pages/SmsAPI.page.js";
import TalkToExpertPage from "../../../pages/TalkToExpert.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Pricing' menu", () => {
  MainPage.hoverTopricingMenu();
});

When("I click 'SMS API' link", () => {
  MainPage.clickSmsApiLink();
});

When("I shoul see 'Messaging Pricing' page header", () => {
  SmsApiPage.messagingPricingHeader().should('be.visible');
});

Then("I hover to page logo", () => {
  SmsApiPage.hoverToPageLogo();
});

Then("I scroll 'Talk To Sales' button", () => {
  SmsApiPage.scrollIntoTalkToSalesButton();
});

Then("I click 'Talk To Sales' button", () => {
  SmsApiPage.clickTalkToSalesButton();
});

Then("I should see 'TalkTo Expert' page header", () => {
  TalkToExpertPage.firstNameField().should('be.visible');
});


