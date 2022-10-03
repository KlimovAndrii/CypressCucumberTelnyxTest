import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import BusinessToConsumerBrandsPage from "../../../pages/BusinesConsumerBrands.page";
import TalkToExpertPage from "../../../pages/TalkToExpert.page";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I hover to 'Solution' menu", () => {
  MainPage.hoverToSolutionMenu();
});

Then("I click 'Business Consumer Brand' link", () => {
  MainPage.clickBusinessConsumerBrandLink();
});

When("I shoud see 'Business Consumer Brand' page header", () => {
  BusinessToConsumerBrandsPage.businessToConsumerBrandsHeader().should('be.visible');
});

When("I hover to page logo", () => {
  BusinessToConsumerBrandsPage.hoverToPageLogo();
});

Then("I scroll 'Get In Touch With OurExperts' button", () => {
  BusinessToConsumerBrandsPage.scrollIntoGetInTouchWithOurExpertsButton();
});

Then("I click 'Get In Touch With OurExperts' button", () => {
  BusinessToConsumerBrandsPage.clickGetInTouchWithOurExpertsButton();
});

Then("I should see 'Talk to expert' header", () => {
  TalkToExpertPage.firstNameField().should('be.visible');
});
