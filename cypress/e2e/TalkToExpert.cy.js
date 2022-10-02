import MainPage from '../pages/Main.page.js';
import TalkToExpertPage from '../pages/TalkToExpert.page.js';
import CookiesHelper from "../helpers/cookies.helper";
import ExpertRequestPage from '../pages/ExpertRequest.page.js';

import * as testData from "../fixtures/testData.json";

describe('Talk to Expert page test', () => {
  before(() => { MainPage.visit(); });

  it('should make a request for support from Talk To Expert page', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickTalkToExpertButton();
    TalkToExpertPage.firstNameField().should('be.visible');
    TalkToExpertPage.chooseReasonForContactMenu('Support');
    TalkToExpertPage.fillFirstNameFieldLocator(testData.firstName);
    TalkToExpertPage.fillLasttNameFieldLocator(testData.lastName);
    TalkToExpertPage.fillBusinesEmailFieldLocator(testData.businesEmail);
    TalkToExpertPage.phoneNumberMenu(testData.ukrainePhoneCode);
    TalkToExpertPage.fillPhoneNumberFieldLocator(testData.phoneNumber);
    TalkToExpertPage.fillCompanyWebSiteFieldLocator(testData.companyWebSite);
    TalkToExpertPage.fillAdditionalInformationFieldLocator(testData.additionalInformation);
    TalkToExpertPage.clickIwantToReceiveEmailsCheckBox();
    TalkToExpertPage.clickSubmitButton();
    ExpertRequestPage.expertRequestHeader().should('be.visible');
  });
});