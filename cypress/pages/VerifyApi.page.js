import "cypress-xpath";
import Page from "./Page";

class VerifyApiPage extends Page {
	verifyApiPricingHeader() { return cy.xpath(`//*[text()="Verify API Pricing"]`); }
	talkToSalesButton() { return cy.xpath(`//a[text()="Talk to Sales"]`); }

	scrollIntoTalkToSalesButton() { this.talkToSalesButton().scrollIntoView(); }
	clickTalkToSalesButton() { this.talkToSalesButton().click(); }
}

export default new VerifyApiPage();