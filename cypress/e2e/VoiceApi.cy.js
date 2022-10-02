import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/Main.page.js';
import VoiceApiPage from "../pages/VoiceApi.page.js";
import TalkToExpertPage from '../pages/TalkToExpert.page.js'

describe('Voice API page test', () => {
  before(() => { MainPage.visit(); });

  it('the Support page should open from the Voice API page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToProductsMenu();
    MainPage.clickVoiceApiLink();
    VoiceApiPage.voiceApiHeader().should('be.visible');
    VoiceApiPage.hoverToPageLogo();
    VoiceApiPage.scrollIntoScheduleDemoButtonView();
    VoiceApiPage.clickScheduleDemoButton();
    TalkToExpertPage.firstNameField().should('be.visible');
  });
});