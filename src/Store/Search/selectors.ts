'use strict';

import { createSelector } from 'reselect';

import { IStore } from '@Interfaces/Redux/Store';
import { getEntities } from '@Store/Entity/selectors'

/**
 * Memoizes and retrieves the products in a store.
 * 
 * @returns StoreProduct[]
 */
export const getSearchResults = () => createSelector([ getEntities ], (entities:any) => {
  const { searchResults } = entities;

  return Object
          .keys(searchResults)
          .map((searchResult:string) => searchResults[searchResult])
})

export const getIsFetchingSearchResults = (state:IStore):boolean => state.search.isFetchingSearchResults;