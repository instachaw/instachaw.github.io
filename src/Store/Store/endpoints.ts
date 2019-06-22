'use strict';

import { callApi } from '@Utilities';
import { ApiConstants } from '@Constants'

const { STORES_ENDPOINT, PRODUCTS_ENDPOINT } = ApiConstants;

/**
 * Fetches the stores collection
 * 
 * @returns Promise<StoreData[]>
 */
const fetchStores = () => callApi({ endpoint: STORES_ENDPOINT });

/**
 * Fetches the products in a store
 * 
 * @param {number} storeId
 * @param {number} pageIndex
 * 
 * @returns Promise<StoreProductData[]>
 */
const fetchStoreProducts = (storeId:number, pageIndex:number) => {
  return callApi({ endpoint: `${PRODUCTS_ENDPOINT}?store_id=${storeId}&page=${pageIndex}` });
}

/**
 * Loads a single store
 * 
 * @param {number} id
 * @returns Promise<StoreData>
 */
const loadStore = (id:number) => callApi({ endpoint: `${ApiConstants.STORES_ENDPOINT}/${id}` });

export default {
  fetchStores,
  fetchStoreProducts,
  loadStore
}