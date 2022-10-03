import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import VideoApiPage from "../../../pages/VideoApi.page.js";
import LogInPage from "../../../pages/LogIn.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Products' menu", () => {
  MainPage.hoverToProductsMenu();
});

When("I click 'Video API' link", () => {
  MainPage.clickVideoApiLink();
});

When("I shoul see 'Get Started' page header", () => {
  VideoApiPage.getStartedButton().should('be.visible');
});

Then("I hover to page logo", () => {
  VideoApiPage.hoverToPageLogo();
});

Then("I click 'Get Started' button", () => {
  VideoApiPage.clickGetStartedButton();
});

Then("I should see 'Log in' page header", () => {
  LogInPage.inputEmailField().should('be.visible');
});



