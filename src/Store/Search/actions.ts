'use strict';

import { Dispatch } from 'redux';
import { normalize } from 'normalizr';

import { ActionTypes } from "@Constants";
import { ISearchPage } from '@Interfaces';
import { EntityActions } from '@Store/Entity/actions';
import { searchSchema, storeSchema } from '@Store/schema';

/**
 * ACTIONS
*/
export const SearchActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionTypes.Search.SetReducer
	}),

	Reset : () => ({
		type: ActionTypes.Search.ResetReducer
	}),

	/**
	 * Toggles the fetching status for search results.
	 * 
	 * @param  {boolean} isFetchingSearchResults
	 * @returns {SearchAction}
	 */
	toggleSearchResultsFetchingStatus: (isFetchingSearchResults:boolean) => {
		return SearchActions.Map({
			isFetchingSearchResults: !isFetchingSearchResults
		})
	},

	fetchSearchResults: (searchQuery:string) => {
		return async (dispatch:Dispatch, {}, api:any) => {
			dispatch(
				SearchActions.toggleSearchResultsFetchingStatus(false)
			);

			return api.fetchSearchResults(searchQuery)
				.then(api.checkStatus)
				.then(api.toJSON)
				.then((searchResults:ISearchPage.ISearchResultData[]) => {
					const { entities } = normalize(searchResults, [searchSchema]);

					if (searchResults.length) {
						const normalizedStores = normalize(entities.stores, [storeSchema])

						dispatch(EntityActions.Map({
							stores: normalizedStores.entities.stores
						}))
					}

					dispatch(EntityActions.Map({
						searchResults: {
							...entities.searchResults
						}
					}))	

					dispatch(
						SearchActions.toggleSearchResultsFetchingStatus(true)
					);
				})
        .catch((e:any) => {
					SearchActions.toggleSearchResultsFetchingStatus(true);
		
					return api.errorHandler(dispatch, e);
				})
		}
	}
}