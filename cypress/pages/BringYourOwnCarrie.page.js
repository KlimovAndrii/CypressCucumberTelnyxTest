import "cypress-xpath";
import Page from "./Page";

class BringYourOwnCarrierPage extends Page {
	bringYourOwnCarrierHeader() { return cy.xpath(`//*[text()="Bring Your Own Carrier (BYOC)"]`); }
	tryItFreeButton() { return cy.xpath(`//h1//following-sibling::div//a[text()='Try it Free']`); }

	clickTryItFreeButton() { this.tryItFreeButton().click(); }
}

export default new BringYourOwnCarrierPage();