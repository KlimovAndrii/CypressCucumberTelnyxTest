import "cypress-xpath";
import Page from "./Page";

class ExpertRequestPage extends Page {
  expertRequestHeader() { return cy.xpath(`//*[text()="Thanks for Reaching Out!"]`); }
}

export default new ExpertRequestPage();