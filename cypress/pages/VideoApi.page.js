import "cypress-xpath";
import Page from "./Page";

class VideoApiPage extends Page  {
  getStartedButton() { return cy.xpath(`//h1//following-sibling::div//a[text()='Get started']`); }

  clickGetStartedButton() { this.getStartedButton().click(); }
}

export default new VideoApiPage();