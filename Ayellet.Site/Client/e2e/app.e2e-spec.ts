import { AyelletPage } from './app.po';

describe('ayellet App', () => {
  let page: AyelletPage;

  beforeEach(() => {
    page = new AyelletPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
