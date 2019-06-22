import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import { normalize } from 'normalizr';

import { SearchResultsFeed } from '@Components';
import { storeSchema } from '@Store/schema';

const searchResults = require('../../__mocks__/search-results.json').results;
const stores = require('../../__mocks__/stores.json').stores;
const normalizedStores = normalize(stores, [storeSchema]).entities.stores;

const setup = ({
  searchResults = [],
  isFetchingSearchResults=false
}) => {
  const {
    queryByTestId,
    queryAllByTestId,
    getByTestId
  } = render(
    <SearchResultsFeed
      searchResults={searchResults}
      isFetchingSearchResults={isFetchingSearchResults}
      stores={normalizedStores}
    />
  )

  return {
    queryByTestId,
    queryAllByTestId,
    getByTestId
  }
}

afterEach(cleanup)

describe('Search results feed', () => {
  describe('Skeletal placeholder', () => {
    test('should render a skeletal placeholder if no merchandise is provided', () => {
      const { queryByTestId } = setup({
        searchResults,
        isFetchingSearchResults: true
      });
      
      expect(queryByTestId('store-merchandise-skeletal')).toBeInstanceOf(HTMLElement);
    })
  
    test('the skeletal placeholder container should have more than one skeleton entry', () => {
      const { queryAllByTestId } = setup({
        searchResults,
        isFetchingSearchResults: true
      });
      
      expect(queryAllByTestId('store-product-item-skeleton').length).toBeGreaterThan(1);
    })
  })

  describe('Results feed', () => {
    test('should render an error banner if no results found', () => {
      const { queryByTestId } = setup({
        searchResults: [],
        isFetchingSearchResults: false
      });
      
      expect(queryByTestId('search-error-banner')).toBeInstanceOf(HTMLElement);
    })

    test('should render at least 5 results', () => {
      const { queryAllByTestId } = setup({
        searchResults,
        isFetchingSearchResults: false
      });
      
      expect(queryAllByTestId('search-result').length).toBeGreaterThan(5);
    })
  })
})