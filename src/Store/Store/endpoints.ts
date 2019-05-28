'use strict';

import { callApi } from '@Utilities';
import { ApiConstants } from '@Constants'

const { STORES_ENDPOINT, PRODUCTS_ENDPOINT } = ApiConstants;

const fetchStores = () => callApi({ endpoint: STORES_ENDPOINT });
const fetchStoreProducts = (storeId:number) => {
  return callApi({ endpoint: `${PRODUCTS_ENDPOINT}?store_id=${storeId}` });
}
const loadStore = (id:number) => callApi({ endpoint: `${ApiConstants.STORES_ENDPOINT}/${id}` });

export default {
  fetchStores,
  fetchStoreProducts,
  loadStore
}