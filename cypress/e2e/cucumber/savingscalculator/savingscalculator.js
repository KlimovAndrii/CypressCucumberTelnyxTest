import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import SalvingCalculatorPage from "../../../pages/SalvingCalculator.page.js";
import SignUpPage from '../../../pages/SignUp.page.js';

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Resources' menu", () => {
  MainPage.hoverToResourcesMenu();
});

When("I click 'Savings Calculator' link", () => {
  MainPage.clickSavingsCalculatorLink();
});

When("I shoul see 'Savings Calculator' page header", () => {
  SalvingCalculatorPage.salvingCalculatorPageHeader().should('be.visible');
});

Then("I hover to page logo", () => {
  SalvingCalculatorPage.hoverToPageLogo();
});

Then("I scroll 'Start Your Free Trial' button", () => {
  SalvingCalculatorPage.scrollIntoStartYourFreeTrialButton();
});

Then("I click 'Start Your Free Trial' button", () => {
  SalvingCalculatorPage.clickStartYourFreeTrialButton();
});

Then("I should see 'Sing Up' page header", () => {
  SignUpPage.signUpHeader().should('be.visible');
});


