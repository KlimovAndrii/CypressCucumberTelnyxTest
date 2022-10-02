import "cypress-xpath";
import Page from "./Page";

class GlobalNumbersPage extends Page {
	globalNumbersHeader() { return cy.xpath(`//*[text()="Get phone numbers "]`); }
	claimYourFreeTestingCreditButton() { return cy.xpath(`//h1//following-sibling::div//a[text()='Claim Your Free Testing Credit']`); }

	clickClaimYourFreeTestingCreditButton() { this.claimYourFreeTestingCreditButton().click(); }
}

export default new GlobalNumbersPage();