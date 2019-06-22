'use strict';

import { callApi } from '@Utilities';
import { ApiConstants } from '@Constants'

const { PRODUCTS_ENDPOINT } = ApiConstants;

/**
 * Returns search results for a query term.
 * 
 * @param {string} searchQuery
 * @param {number} pageIndex
 * 
 * @returns {Promise<StoreProductData[]>}
 */
const fetchSearchResults = (searchQuery:string, pageIndex:number = 1) => {
  return callApi({ endpoint: `${PRODUCTS_ENDPOINT}?search=${searchQuery}&page=${pageIndex}` });
}

export default { fetchSearchResults }