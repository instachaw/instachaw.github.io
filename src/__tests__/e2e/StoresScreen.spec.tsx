import { setupPuppeteer } from '../test-utils';
const { getDocument, queries, wait } = require('pptr-testing-library')
import { storesUrl } from './'

const { queryAllByTestId } = queries;


describe('Stores Page', () => {  
  test('Contains more than one store', async (done) => {
    await setupPuppeteer(storesUrl, async (page:any) => {
      const storesSelector = '[data-testid=stores-feed-item]';

      const $document = await getDocument(page);
      await page.waitForSelector(storesSelector);

      const storesFeedItems = await queryAllByTestId($document, 'stores-feed-item')

      expect(storesFeedItems.length).toBeGreaterThan(1)
    })
    
    done()
  }, 160000);
});