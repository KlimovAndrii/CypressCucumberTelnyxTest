import "cypress-xpath";
import Page from "./Page";

class NetworkPage extends Page {
	networkPageHeader() { return cy.xpath(`//*[text()='The Global, Private Network Built for Real-Time Comms.']`); }
	seeOurPricingButton() { return cy.xpath(`//a[@href="/pricing" and text()="See our Pricing"]`); }

	scrollIntoSeeOurPricingButton() { this.seeOurPricingButton().scrollIntoView(); }
	clickSeeOurPricingButton() { this.seeOurPricingButton().click(); }
}

export default new NetworkPage();