import "cypress-xpath";
import Page from "./Page";

class VoiceApiPage extends Page {
  voiceApiHeader() { return cy.xpath(`//*[text()="Voice API"]//parent::h1`); }
  scheduleDemoButton() { return cy.xpath(`//a[@href="/contact-us" and text()="Schedule a Demo"]`); }

  clickScheduleDemoButton() { this.scheduleDemoButton().click(); }
  scrollIntoScheduleDemoButtonView() { this.scheduleDemoButton().scrollIntoView(); }
}

export default new VoiceApiPage();