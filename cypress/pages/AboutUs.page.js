import "cypress-xpath";
import Page from "./Page";

class AboutUsPage extends Page {
	aboutUsHeader() { return cy.xpath(`//h1[text()='Unlocking the power of intelligent connectivity']`); }
	seeOpenJobsLink() { return cy.xpath(`//a[@href="https://telnyx.com/company/careers"]`); }
	
	scrollIntoSeeOpenJobsLink() { this.seeOpenJobsLink().scrollIntoView(); }
	clickSeeOpenJobsLink() { this.seeOpenJobsLink().click(); }
}

export default new AboutUsPage();