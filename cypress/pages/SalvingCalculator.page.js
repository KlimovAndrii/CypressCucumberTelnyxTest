import "cypress-xpath";
import Page from "./Page";

class SalvingCalculatorPage extends Page {
  salvingCalculatorPageHeader() { return cy.xpath(`//span[text()='How much will you save switching from Twilio?']`); }
  startYourFreeTrialButton() { return cy.xpath(`//a[text()='Start your free trial']`); }
  
  scrollIntoStartYourFreeTrialButton() { this.startYourFreeTrialButton().scrollIntoView(); }
	clickStartYourFreeTrialButton() { this.startYourFreeTrialButton().click(); }
}

export default new SalvingCalculatorPage();