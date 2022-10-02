import "cypress-xpath";
import Page from "./Page";

class PricingPage extends Page {
  pricingPageHeader() { return cy.xpath(`//*[text()="Only pay for what you use"]`); }
}

export default new PricingPage();