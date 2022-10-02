import "cypress-xpath";
import Page from "./Page";

class ResourceHubPage extends Page {
  resourceHubHeader() { return cy.xpath(`//h1[text()="Resource Hub"]`); }
  smsGuideButton() { return cy.xpath(`//a[@href="/learn/sms-guide"]`); }
  
  clickSmsGuideButton() { this.smsGuideButton().click(); }
}

export default new ResourceHubPage();