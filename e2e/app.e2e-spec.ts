import { FclubPage } from './app.po';

describe('fclub App', function() {
  let page: FclubPage;

  beforeEach(() => {
    page = new FclubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fc works!');
  });
});
