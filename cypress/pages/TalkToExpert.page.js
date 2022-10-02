import "cypress-xpath";
import Page from "./Page";

class TalkToExpertPage extends Page {
	ReasonForContactMenuSelector() { return cy.xpath(`//select[@id="Reason_for_Contact__c"]`); }
	firstNameField() { return cy.xpath(`//input[@id="FirstName"]`); }
	lasttNameField() { return cy.xpath(`//input[@id="LastName"]`); }
	businesEmailField() { return cy.xpath(`//input[@id="Email"]`); }
	phoneNumberMenuSelector() { return cy.xpath(`//select[@id="Phone_Number_Extension__c"]`); }
	phoneNumberField() { return cy.xpath(`//input[@id="Phone_Number_Base__c"]`); }
	companyWebSiteField() { return cy.xpath(`//input[@id="Website"]`); }
	additionalInformationField() { return cy.xpath(`//textarea[@id="Form_Additional_Information__c"]`); }
	iWantToReceiveEmailsCheckBox() { return cy.xpath(`//input[@id="mktoCheckbox_10687_0"]`); }
	submitButton() { return cy.xpath(`//button[@class="mktoButton"]`); }
	
	fillFirstNameFieldLocator(firstName) { this.firstNameField().clear().type(firstName); }
	fillLasttNameFieldLocator(lastName) { this.lasttNameField().clear().type(lastName); }
	fillBusinesEmailFieldLocator(businesEmail) { this.businesEmailField().clear().type(businesEmail); }
	fillPhoneNumberFieldLocator(phoneNumber) { this.phoneNumberField().clear().type(phoneNumber); }
	fillCompanyWebSiteFieldLocator(companyWebsite) { this.companyWebSiteField().clear().type(companyWebsite); }
	fillAdditionalInformationFieldLocator(additionalInformation) { this.additionalInformationField().clear().type(additionalInformation); }
	
	clickChooseReasonForContactMenu() { this.clickElement(this.chooseReasonForContactMenuLocator); }
	clickPhoneNumberMenu() { this.clickElement(this.phoneNumberMenuLocator); }
	clickIwantToReceiveEmailsCheckBox() { this.iWantToReceiveEmailsCheckBox().click(); }
	clickSubmitButton() { this.submitButton().click(); }

	chooseReasonForContactMenu(value) { this.ReasonForContactMenuSelector().select(value);	}
  phoneNumberMenu(value) { this.phoneNumberMenuSelector().select(value); }
}

export default new TalkToExpertPage();