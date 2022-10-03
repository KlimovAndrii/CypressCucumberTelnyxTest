import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page.js';
import BlogSearchPage from "../../../pages/BlogSearch.page.js";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I should see 'Talk to expert' button", () => {
  MainPage.talkToExpertButton().should('be.visible');
});

Then("I shoul scroll to footer", () => {
  MainPage.scrollIntoBlogLinkView();
});

Then("I should click 'Blog' footer link", () => {
  MainPage.clickBlogLink();
});

When("I shoud see 'Blog' search field", () => {
  BlogSearchPage.blogInputSearchField().should('be.visible');
});

Then("I click on 'Blog' search field", () => {
  BlogSearchPage.clickBlogInputSearchField();
});

Then("I enter 'product' require", () => {
  BlogSearchPage.fillBlogInputSearchField('product');
});

Then("I click 'Enter'", () => {
  BlogSearchPage.clickEnterBlogInputSearchField();
});

Then("I shoud see 'Blog' search results", () => {
  BlogSearchPage.blogSearchResult().should('have.length.gt', 1);
});
