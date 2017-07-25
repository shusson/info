import { InfoPage } from './app.po';

describe('info App', () => {
  let page: InfoPage;

  beforeEach(() => {
    page = new InfoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
