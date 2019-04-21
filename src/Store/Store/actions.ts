'use strict';
import { Dispatch } from 'redux';

import { ActionTypes } from "@Constants";
import { IStoresData } from '@Interfaces/Redux/Store';

/**
 * ACTIONS
*/
export const StoreActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionTypes.Store.SetReducer
	}),

	Reset : () => ({
		type: ActionTypes.Store.ResetReducer
	}),

	fetchStores: () => {
		return (dispatch:Dispatch, {}:any, api:any) => {
	
			dispatch(StoreActions.Map({ isFetchingStores: true }))

			api.fetchStores()
				.then(api.checkStatus)
				.then(api.toJSON)
        .then(({ stores }:IStoresData) => {
					dispatch(StoreActions.Map({
							isFetchingStores: false,
							stores
						})
					)
				})
        .catch((e:any) => api.errorHandler(dispatch, e))
		}
	}
}