import { DjleagueNg2Home } from './app.po';

describe('ng-new App', () => {
  let page: DjleagueNg2Home;

  beforeEach(() => {
    page = new DjleagueNg2Home();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
        .then(msg => expect(msg).toEqual('Welcome to app!!'))
        .then(done, done.fail);
  });
});
