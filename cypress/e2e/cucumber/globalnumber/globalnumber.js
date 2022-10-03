import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import GlobalNumbersPage from "../../../pages/GlobalNumbers.page.js";
import SignUpPage from "../../../pages/SignUp.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I should see 'Talk to expert' button", () => {
  MainPage.talkToExpertButton().should('be.visible');
});

Then("I scroll to 'Global Numbers' link", () => {
  MainPage.scrollIIntoGlobalNumbersLinkView();
});

When("I click 'Global Numbers' link", () => {
  MainPage.clickGlobalNumbersLink();
});

When("I should see 'Numbers' page header", () => {
  GlobalNumbersPage.globalNumbersHeader().should('be.visible');
});

Then("I click 'Claim Your Free Testing Credit' button", () => {
  GlobalNumbersPage.clickClaimYourFreeTestingCreditButton();
});

Then("I should see 'Sign up' page header", () => {
  SignUpPage.signUpHeader().should('be.visible');
});

