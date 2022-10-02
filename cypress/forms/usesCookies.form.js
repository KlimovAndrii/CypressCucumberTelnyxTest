import "cypress-xpath";

class UsesCookiesForm {
  titleCookiesLocator = 'button[aria-label="close and deny"] + p';
  acceptAndCloseButtonLocator = "//p[text()='This site uses cookies.']//parent::div//button[text()='Accept and close']";

  isFormOpened() { return cy.$$(this.titleCookiesLocator).length > 0; }
  clickAcceptAndCLoseButton() { cy.xpath(this.acceptAndCloseButtonLocator).click(); }
}

export default UsesCookiesForm;