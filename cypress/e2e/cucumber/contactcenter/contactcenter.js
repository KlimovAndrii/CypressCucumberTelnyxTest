import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import ContactCentrePage from "../../../pages/ContactCentre.page.js";
import TalkToExpertPage from "../../../pages/TalkToExpert.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Solution' menu", () => {
  MainPage.hoverToSolutionMenu();
});

Then("I click 'Contact Centre' link", () => {
  MainPage.clickContactCentreLink();
});

When("I When I shoud see 'Contact Centre' page header", () => {
  ContactCentrePage.contactCentreSolutionHeader().should('be.visible');
});

When("I hover to page logo", () => {
  ContactCentrePage.hoverToPageLogo();
});

Then("I scroll to 'Join The Industry Leaders' button", () => {
  ContactCentrePage.scrollIntoJoinTheIndustryLeadersButton();
});

Then("I click to 'Join The Industry Leaders' button", () => {
  ContactCentrePage.clickJoinTheIndustryLeadersButton();
});

Then("I should see 'Talk to expert' header", () => {
  TalkToExpertPage.firstNameField().should('be.visible');
});
