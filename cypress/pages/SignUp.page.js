import "cypress-xpath";
import Page from "./Page";

class SignUpPage extends Page {
  signUpHeader() { return cy.xpath(`//*[text()="Create a free account"]`); }
}

export default new SignUpPage();