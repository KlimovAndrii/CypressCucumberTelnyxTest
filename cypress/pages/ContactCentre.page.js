import "cypress-xpath";
import Page from "./Page";

class ContactCentrePage extends Page {
	contactCentreSolutionHeader() { return cy.xpath(`//*[text()="Contact Center Solutions"]`); }
	joinTheIndustryLeadersButton() { return cy.xpath(`//a[@href="/contact-us" and text()="Join the Industry Leaders"]`); }

	clickJoinTheIndustryLeadersButton() { this.joinTheIndustryLeadersButton().click(); }

	scrollIntoJoinTheIndustryLeadersButton() { this.joinTheIndustryLeadersButton().scrollIntoView(); }
}

export default new ContactCentrePage();