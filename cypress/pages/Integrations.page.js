import "cypress-xpath";
import Page from "./Page";

class IntegrationsPage extends Page {
	connectTelnyxToTheToolsHeader() { return cy.xpath(`//*[text()="Connect Telnyx to the tools you're already using"]`); }
	exploreOurMarketplaceButton() { return cy.xpath(`//h1//following-sibling::div//a[text()='Explore Our Marketplace']`); }

	clickExploreOurMarketplaceButton() { this.exploreOurMarketplaceButton().click(); }
}

export default new IntegrationsPage();