import { setupPuppeteer } from '../test-utils';
const { getDocument, queries, wait } = require('pptr-testing-library')
import { searchResultsUrl } from './'

const { queryAllByTestId } = queries;

describe('Search Results Page', () => {  
  test('Contains more than one search result', async (done) => {
    await setupPuppeteer(searchResultsUrl, async (page:any) => {
      const searchResultSelector = '[data-testid="search-result"]';

      const $document = await getDocument(page);
      await page.waitForSelector(searchResultSelector);

      await wait(async () => {
        const searchResults = await queryAllByTestId($document, 'search-result')

        expect(searchResults.length).toBeGreaterThan(1)
      })

      done()
    })
  }, 160000);
});