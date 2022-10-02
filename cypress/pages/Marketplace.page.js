import "cypress-xpath";
import Page from "./Page";

class MarketplacePage extends Page {
  marketplaceHeader() { return cy.xpath(`//*[text()="Welcome to the Telnyx Integration Marketplace"]`); }
}

export default new MarketplacePage();