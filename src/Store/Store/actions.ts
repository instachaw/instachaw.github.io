'use strict';
import { normalize } from 'normalizr';

import { Dispatch } from 'redux';

import { ActionTypes } from "@Constants";
import { IStorePage } from '@Interfaces';

import { EntityActions } from '@Store/Entity/actions';
import { storeSchema, productSchema } from '@Store/schema';
import {
	getObjectKeysCount,
	greaterOrEquals
} from '@Utilities'

/**
 * ACTIONS
*/
export const StoreActions = {
	/**
	 * Sets a new value within the reducer.
	 * 
	 * @param  {any} payload
	 * @returns {Object<Action>}
	 */
	Map : (payload:any) => ({
		payload,
		type: ActionTypes.Store.SetReducer
	}),

	/**
	 * Sets the reducer to the initial state.
	 * 
	 * @returns {Object<Action>}
	 */
	Reset : () => ({
		type: ActionTypes.Store.ResetReducer
	}),

	/**
	 * Notifies the app concerning the store loading status
	 * for a single store (not a list of stores!)
	 * 
	 * @param  {boolean} isLoadingStore
	 * @returns {StoreAction}
	 */
	toggleStoreLoadingStatus: (isLoadingStore:boolean) => {
		return StoreActions.Map({
			isLoadingStore: !isLoadingStore
		})
	},

	/**
	 * Toggles the fetching status for store products.
	 * 
	 * @param  {boolean} isFetchingStoreProducts
	 * @returns {StoreAction}
	 */
	toggleStoreProductsFetchingStatus: (isFetchingStoreProducts:boolean) => {
		return StoreActions.Map({
			isFetchingStoreProducts: !isFetchingStoreProducts
		})
	},

	/**
	 * Toggles the fetching status for stores.
	 * 
	 * @param  {boolean} isFetchingStore
	 * @returns {StoreAction}
	 */
	toggleStoresFetchingStatus: (isFetchingStores:boolean) => {
		return StoreActions.Map({
			isFetchingStores: !isFetchingStores
		})
	},

	/**
	 * Processes a HTTP request for the stores list.
	 * 
	 * @returns {Promise<Void>}
	 */
	fetchStores: () => {
		const minNumberOfStoresToLoad = 2;

		return (dispatch:Dispatch, getState:any, api:any) => {	
			const storeEntities = getState().entities.stores

			// If stores are already loaded, avoid another HTTP request.
			if (greaterOrEquals(
						minNumberOfStoresToLoad,
						getObjectKeysCount(storeEntities),
					)
				) {
				dispatch(StoreActions.toggleStoreLoadingStatus(true));
				return Promise.resolve();
			}

			dispatch(StoreActions.toggleStoresFetchingStatus(
					getState().store.isFetchingStores
				)
			);

			return api.fetchStores()
				.then(api.checkStatus)
				.then(api.toJSON)
        .then(({ stores }:IStorePage.IStoresData) => {
					const { entities } = normalize(stores, [storeSchema]);
					
					setTimeout(() => {
						dispatch(StoreActions.toggleStoresFetchingStatus(
							getState().store.isFetchingStores
						));
					}, 1000)
					dispatch(EntityActions.Map({ ...entities }))
				})
        .catch((e:any) => api.errorHandler(dispatch, e))
		}
	},

	fetchStoreProducts: (storeId:number) => {
		const minNumStoreProducts:number = 5;
		const { toggleStoreProductsFetchingStatus } = StoreActions

		return (dispatch:Dispatch, getState:any, api:any) => {
			const storeEntities = getState().entities.store || {}
			const canMakeRequest = greaterOrEquals(getObjectKeysCount(storeEntities), minNumStoreProducts);

			if (!canMakeRequest) {
				dispatch(toggleStoreProductsFetchingStatus(true));
				return Promise.resolve();
			}

			dispatch(toggleStoreProductsFetchingStatus(getState().store.isFetchingStoreProducts));

			return api.fetchStoreProducts(storeId)
				.then(api.checkStatus)
				.then(api.toJSON)
        .then(({ items }:IStorePage.IStoreProductsData) => {
					const { entities } = normalize(items, [productSchema]);

					setTimeout(() => {
						dispatch(toggleStoreProductsFetchingStatus(getState().store.isFetchingStoreProducts));
					}, 1000)

					dispatch(EntityActions.Map({ ...entities }))
				})
        .catch((e:any) => api.errorHandler(dispatch, e))
		} 
	},

	/**
	 * Initiates a HTTP request for a single store.
	 * 
	 * @returns {Promise}
	 */
	getStore: (id:number) => {
		const { toggleStoreLoadingStatus } = StoreActions;

		return (dispatch:Dispatch, getState:any, api:any):Promise<any> => {
			// If the store has already been loaded avoid another HTTP request.
			if (id in getState().entities.stores) {
				dispatch(toggleStoreLoadingStatus(true));

				// Return a Promise object for chaining.
				return Promise.resolve();			
			}

			dispatch(toggleStoreLoadingStatus(getState().store.isLoadingStore));

			return api.loadStore(id)
				.then(api.checkStatus)
				.then(api.toJSON)
        .then((store:IStorePage.IStoreData) => {
					const { entities } = normalize(store, storeSchema);
					
					setTimeout(() => {
						dispatch(StoreActions.toggleStoreLoadingStatus(
							getState().store.isLoadingStore
						));
					}, 1000)
	
					dispatch(EntityActions.Map({ ...entities }))
				})
        .catch((e:any) => api.errorHandler(dispatch, e))
		}
	}
}