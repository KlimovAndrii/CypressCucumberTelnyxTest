import "cypress-xpath";
import Page from "./Page";

class LogInPage extends Page {
  inputEmailField() { return cy.xpath(`//form[@aria-label="loginForm"]//input[@name="email" and @class="ui-reactv2-input"]`); }
}

export default new LogInPage(); 