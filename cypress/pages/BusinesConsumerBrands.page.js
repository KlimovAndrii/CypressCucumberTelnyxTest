import "cypress-xpath";
import Page from "./Page";

class BusinessToConsumerBrandsPage extends Page {
  businessToConsumerBrandsHeader() { return cy.xpath(`//h1//*[text()="Business to Consumer Brands"]`); }
  getInTouchWithOurExpertsButton() { return cy.xpath(`//a[text()='Get in touch with our Experts']`); }

  scrollIntoGetInTouchWithOurExpertsButton() { this.getInTouchWithOurExpertsButton().scrollIntoView(); }

  clickGetInTouchWithOurExpertsButton() { this.getInTouchWithOurExpertsButton().click(); }
}

export default new BusinessToConsumerBrandsPage();