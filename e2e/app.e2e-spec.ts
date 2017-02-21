import { DjleagueNg2Home } from './app.po';

describe('ng-new App', () => {
  let page: DjleagueNg2Home;

  beforeEach(() => {
    page = new DjleagueNg2Home();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
