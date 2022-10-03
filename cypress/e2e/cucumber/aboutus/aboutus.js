import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import AboutUsPage from "../../../pages/AboutUs.page.js";
import CareersPage from "../../../pages/Creers.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Company' menu", () => {
  MainPage.hoverToCompanyMenu();
});

Then("I click 'About Telnyx' Link", () => {
  MainPage.clickAboutTelnyxLink();
});

Then("I should see 'About Us' header", () => {
  AboutUsPage.aboutUsHeader().should('be.visible');
});

When("I hover to page logo", () => {
  AboutUsPage.hoverToPageLogo();
});

Then("I scroll into 'See Open Jobs' link", () => {
  AboutUsPage.scrollIntoSeeOpenJobsLink();
});

Then("I click 'See Open Jobs' link", () => {
  AboutUsPage.clickSeeOpenJobsLink();
});

Then("I should see 'Careers' header", () => {
  CareersPage.careersHeader().should('be.visible');
});