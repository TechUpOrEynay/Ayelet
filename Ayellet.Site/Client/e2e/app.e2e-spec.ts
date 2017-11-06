import { oreyniPage } from './app.po';

describe('oreyni App', () => {
  let page: oreyniPage;

  beforeEach(() => {
    page = new oreyniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
