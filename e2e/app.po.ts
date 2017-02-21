import { browser, element, by } from 'protractor';

export class DjleagueNg2Home {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
