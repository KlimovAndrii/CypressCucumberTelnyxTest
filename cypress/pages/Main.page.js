import "cypress-xpath";
import "cypress-real-events/support";
import Page from "./Page";

class MainPage extends Page {
	resourcesMenu() { return cy.xpath(`//li//span[text()="Resources"]`); }
	companyMenu() { return cy.xpath(`//li//span[text()="Company"]`); }
	productsMenu() { return cy.xpath(`//li//*[text()="Products"]`); }
	pricingMenu() { return cy.xpath(`//li//*[text()="Pricing"]`); }
	solutionMenu() { return cy.xpath(`//li//*[text()="Solutions" and (not(@class))]`); }
	talkToExpertButton() { return cy.xpath(`//a[@href="/contact-us" and @class="sc-f97529d6-0 bjUuRN sc-b74bae4-0 fVDMEa mchNoDecorate"]`); }
	voiceApiLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/products/voice-api"]`); }
	videoApiLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/products/video-api"]`); }
	contactCentreLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/use-cases/contact-center"]`); }
	businessConsumerBrandLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/solutions/business-to-consumer-brands"]`); }
	networkLink() { return cy.xpath(`//a[@href="/solutions/global-ip-network" and text()="Network"]`); }
	bringYourOwnCarrierLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/bring-your-own-carrier"]`); }
	savingsCalculatorLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/twilio-pricing-calculator"]`); }
	aboutTelnyxLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/company/about"]`); }
	integrationsLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/integrations"]`); }
	smsApiLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/pricing/messaging"]`); }
	verifyApiLink() { return cy.xpath(`//div[@class="sc-7b3980dc-2 bjOBlW"]//child::a[@href="/pricing/verify-api"]`); }
	globalNumbersLink() { return cy.xpath(`//a[@href="/products/phone-numbers" and @class="sc-f97529d6-0 bjUuRN mchNoDecorate"]`); }
	resourceHubLink() { return cy.xpath(`//a[@href="/learn" and @class="sc-f97529d6-0 bjUuRN mchNoDecorate"]`); }
	blogLink() { return cy.xpath(`//a[@href="/resources" and @class="sc-f97529d6-0 bjUuRN mchNoDecorate"]`); }

	clickTalkToExpertButton() { this.talkToExpertButton().click(); }
	clickVoiceApiLink() { this.voiceApiLink().click(); }
	clickVideoApiLink() { this.videoApiLink().click(); }
	clickContactCentreLink() { this.contactCentreLink().click(); }
	clickBusinessConsumerBrandLink() { this.businessConsumerBrandLink().click(); }
	clickNetworkLink() { this.networkLink().click(); }
	clickBringYourOwnCarrierLink() { this.bringYourOwnCarrierLink().click(); }
	clickSavingsCalculatorLink() { this.savingsCalculatorLink().click(); }
	clickAboutTelnyxLink() { this.aboutTelnyxLink().click(); }
	clickIntegrationsLink() { this.integrationsLink().click(); }
	clickSmsApiLink() { this.smsApiLink().click(); }
	clickVerifyApiLink() { this.verifyApiLink().click(); }
	clickGlobalNumbersLink() { this.globalNumbersLink().click(); }
	clickResourceHubLink() { this.resourceHubLink().click(); }
	clickBlogLink() { this.blogLink().click(); }

	hoverToSolutionMenu() {
		this.hoverToPageLogo();
		this.solutionMenu().realHover('mouse');
	}
	hoverToProductsMenu() {
		this.hoverToPageLogo();
		this.productsMenu().realHover('mouse');
	}
	hoverToResourcesMenu() {
		this.hoverToPageLogo();
		this.resourcesMenu().realHover('mouse');
	}
	hoverToCompanyMenu() {
		this.hoverToPageLogo();
		this.companyMenu().realHover('mouse');
	}
	hoverTopricingMenu() {
		this.hoverToPageLogo();
		this.pricingMenu().realHover('mouse');
	}

	scrollIIntoGlobalNumbersLinkView() { this.globalNumbersLink().scrollIntoView(); }
	scrollIntoResourceHubLinkView() { this.resourceHubLink().scrollIntoView(); }
	scrollIntoBlogLinkView() { this.blogLink().scrollIntoView(); }
}

export default new MainPage();