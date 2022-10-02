import "cypress-xpath";
import Page from "./Page";

class SmsCompleteGuidePage extends Page {
  smsCompleteGuideHeader() { return cy.xpath(`//h1[text()="SMS | Complete Guide to Sending Text Messages"]`); }
  signUpButton() { return cy.xpath(`//h3[text()="Trial our SMS API for free with $10 credit."]//following::a[text()="Sign up"]`); }

  clickSignUpButton() { this.signUpButton().click(); }
}

export default new SmsCompleteGuidePage();