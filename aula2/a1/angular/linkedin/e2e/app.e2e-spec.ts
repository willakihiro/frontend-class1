import { LinkedinPage } from './app.po';

describe('linkedin App', () => {
  let page: LinkedinPage;

  beforeEach(() => {
    page = new LinkedinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
