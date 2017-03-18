import { PipePage } from './app.po';

describe('pipe App', () => {
  let page: PipePage;

  beforeEach(() => {
    page = new PipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
