import MainPage from '../pages/Main.page';

class CookiesHelper {
  acceptCookies() {
    if (MainPage.usesCookiesForm.isFormOpened()) {
      MainPage.usesCookiesForm.clickAcceptAndCLoseButton();
    }
  }
}

export default new CookiesHelper();