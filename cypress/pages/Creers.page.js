import "cypress-xpath";
import Page from "./Page";

class CareersPage extends Page {
  careersHeader() { return cy.xpath(`//*[text()="We're building the future of communications."]`) };
}

export default new CareersPage();