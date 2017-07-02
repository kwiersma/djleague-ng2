import { DjleagueNg2Home } from './app.po';

describe('ng-new App', () => {
  let page: DjleagueNg2Home;

  beforeEach(() => {
    page = new DjleagueNg2Home();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
