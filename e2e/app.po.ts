export class DjleagueNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('djleague-ng2-app p')).getText();
  }
}
