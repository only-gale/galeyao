import { GaleyaoPage } from './app.po';

describe('galeyao App', function() {
  let page: GaleyaoPage;

  beforeEach(() => {
    page = new GaleyaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
