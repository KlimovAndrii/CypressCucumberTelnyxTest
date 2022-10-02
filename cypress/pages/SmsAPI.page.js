import "cypress-xpath";
import Page from "./Page";

class SmsApiPage extends Page {
  messagingPricingHeader() { return cy.xpath(`//*[text()='Messaging pricing']`); }
  talkToSalesButton() { return cy.xpath(`//*[text()="Talk to sales"]`); }
  
  scrollIntoTalkToSalesButton() { this.talkToSalesButton().scrollIntoView();; }
  clickTalkToSalesButton() { this.talkToSalesButton().click(); }
}

export default new SmsApiPage();