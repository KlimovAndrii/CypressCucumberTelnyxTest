import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import VoiceApiPage from "../../../pages/VoiceApi.page.js";
import TalkToExpertPage from "../../../pages/TalkToExpert.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Products' menu", () => {
  MainPage.hoverToProductsMenu();
});

When("I click 'Voice API' link", () => {
  MainPage.clickVoiceApiLink();
});

When("I shoul see 'Voice API' page header", () => {
  VoiceApiPage.voiceApiHeader().should('be.visible');
});

Then("I hover to page logo", () => {
  VoiceApiPage.hoverToPageLogo();
});

Then("I scroll to 'Schedule Demo' button", () => {
  VoiceApiPage.scrollIntoScheduleDemoButtonView();
});

Then("I click 'Schedule Demo' button", () => {
  VoiceApiPage.clickScheduleDemoButton();
});

Then("I should see 'Talk To Expert' page header", () => {
  TalkToExpertPage.firstNameField().should('be.visible');
});


