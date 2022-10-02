import "cypress-xpath";
import "cypress-real-events/support";
import UsesCookiesForm from "../forms/usesCookies.form";

class Page {
  usesCookiesForm = new UsesCookiesForm();

  pageLogo() { return cy.xpath('//*[@id="Logo-Dark_svg__Layer_1"]') };

  visit(url = '/') {
    cy.visit(url);
  }
  hoverToPageLogo() {
    this.pageLogo().realHover('mouse');
  }
}

export default Page;