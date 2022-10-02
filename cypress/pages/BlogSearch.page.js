import "cypress-xpath";
import Page from "./Page"

class BlogSearchPage extends Page {
	blogInputSearchField() { return cy.xpath(`//input[@id="search"]`); }
	blogSearchResult() { return cy.xpath(`//article[@class="sc-b43e299b-5 jsQCwT"]`); }

	clickBlogInputSearchField() { this.blogInputSearchField().click(); }
	clickEnterBlogInputSearchField() { this.blogInputSearchField().type(`{Enter}`); }
	fillBlogInputSearchField(searchText) { this.blogInputSearchField().clear().type(searchText); }
}

export default new BlogSearchPage();