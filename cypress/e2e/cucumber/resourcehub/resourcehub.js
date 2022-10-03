import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import ResourceHubPage from "../../../pages/ResourceHub.page.js";
import SmsCompleteGuidePage from "../../../pages/SmsCompleteGuide.page.js";
import SignUpPage from '../../../pages/SignUp.page.js';

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I should see 'Talk to expert' button", () => {
  MainPage.talkToExpertButton().should('be.visible');
});

When("I scroll to 'Recource Hub' link", () => {
  MainPage.scrollIntoResourceHubLinkView();
});

When("I click 'Recource Hub' link", () => {
  MainPage.clickResourceHubLink();
});

Then("I should see 'Recource Hub' page header", () => {
  ResourceHubPage.resourceHubHeader().should('be.visible');
});

Then("I click 'SMS Guide' button", () => {
  ResourceHubPage.clickSmsGuideButton();
});

Then("I should see 'SMS Complete Guide' page header", () => {
  SmsCompleteGuidePage.smsCompleteGuideHeader().should('be.visible');
});

Then("I click 'Sign Up' button", () => {
  SmsCompleteGuidePage.clickSignUpButton();
});

Then("I should see 'Sign up' page header", () => {
  SignUpPage.signUpHeader().should('be.visible');
});

