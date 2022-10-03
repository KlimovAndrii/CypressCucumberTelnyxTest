import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CookiesHelper from "../../../helpers/cookies.helper";
import MainPage from '../../../pages/Main.page';
import ExpertRequestPage from "../../../pages/ExpertRequest.page";
import TalkToExpertPage from "../../../pages/TalkToExpert.page";
import * as testData from "../../../fixtures/testData.json";

Given("I visit telnyx.com", () => {
  MainPage.visit();
});

Then("I accept cookies, if it's appear", () => {
  CookiesHelper.acceptCookies();
});

When("I click 'Talk To Expert' button", () => {
  MainPage.clickTalkToExpertButton();
});

When("I shoul see 'Talk To Expert' page header", () => {
  TalkToExpertPage.firstNameField().should('be.visible');
});

When("I choose reason for contact 'Support'", () => {
  TalkToExpertPage.chooseReasonForContactMenu('Support');
});

Then("I enter first name", () => {
  TalkToExpertPage.fillFirstNameFieldLocator(testData.firstName);
});

Then("I enter last name", () => {
  TalkToExpertPage.fillLasttNameFieldLocator(testData.lastName);
});

Then("I enter business email name", () => {
  TalkToExpertPage.fillBusinesEmailFieldLocator(testData.businesEmail);
});

Then("I choose phone code", () => {
  TalkToExpertPage.phoneNumberMenu(testData.ukrainePhoneCode);
});

Then("I enter phone number", () => {
  TalkToExpertPage.fillPhoneNumberFieldLocator(testData.phoneNumber);
});

Then("I enter company web site", () => {
  TalkToExpertPage.fillCompanyWebSiteFieldLocator(testData.companyWebSite);
});

Then("I enter additional information", () => {
  TalkToExpertPage.fillAdditionalInformationFieldLocator(testData.additionalInformation);
});

Then("I click 'I want To Receive Emails' checkbox", () => {
  TalkToExpertPage.clickIwantToReceiveEmailsCheckBox();
});

Then("I click 'Submit' button", () => {
  TalkToExpertPage.clickSubmitButton();
});

Then("I shoul see 'Expert Request' page header", () => {
  ExpertRequestPage.expertRequestHeader().should('be.visible');
});