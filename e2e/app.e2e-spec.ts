import { DemoBlogClientPage } from './app.po';

describe('demo-blog-client App', function() {
  let page: DemoBlogClientPage;

  beforeEach(() => {
    page = new DemoBlogClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
