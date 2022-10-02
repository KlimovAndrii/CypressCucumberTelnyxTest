import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import BlogSearchPage from "../pages/BlogSearch.page.js";

describe('Blog Search page test', () => {
  before(() => { MainPage.visit(); });

  it('the Blog Search results page should appear from the Blog page after creating a request', () => {
    CookiesHelper.acceptCookies();
    MainPage.talkToExpertButton().should('be.visible');
    MainPage.scrollIntoBlogLinkView();
    MainPage.clickBlogLink();
    BlogSearchPage.blogInputSearchField().should('be.visible');
    BlogSearchPage.clickBlogInputSearchField();
    BlogSearchPage.fillBlogInputSearchField('product');
    BlogSearchPage.clickEnterBlogInputSearchField();
    BlogSearchPage.blogSearchResult().should('have.length.gt', 1);
  });
});