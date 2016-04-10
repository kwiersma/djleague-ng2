import { DjleagueNg2Page } from './app.po';

describe('djleague-ng2 App', function() {
  let page: DjleagueNg2Page;

  beforeEach(() => {
    page = new DjleagueNg2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('djleague-ng2 Works!');
  });
});
