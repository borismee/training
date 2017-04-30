import { SiqwebAngularCliPage } from './app.po';

describe('siqweb-angular-cli App', () => {
  let page: SiqwebAngularCliPage;

  beforeEach(() => {
    page = new SiqwebAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
