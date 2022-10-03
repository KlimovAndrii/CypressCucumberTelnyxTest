import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import BringYourOwnCarrierPage from "../../../pages/BringYourOwnCarrie.page.js";
import SignUpPage from "../../../pages/SignUp.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Resources' menu", () => {
  MainPage.hoverToResourcesMenu();
});

Then("I click 'Bring Your Own Carrier' link", () => {
  MainPage.clickBringYourOwnCarrierLink();
});

When("I shoul see 'Bring Your Own Carrier' page header", () => {
  BringYourOwnCarrierPage.bringYourOwnCarrierHeader().should('be.visible');
});

When("I hover to page logo", () => {
  BringYourOwnCarrierPage.hoverToPageLogo();
});

Then("I click 'Try it free' button", () => {
  BringYourOwnCarrierPage.clickTryItFreeButton();
});

Then("I should see 'Sign Up' header", () => {
  SignUpPage.signUpHeader().should('be.visible');
});
