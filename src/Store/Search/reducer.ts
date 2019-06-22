'use strict';

import { ActionTypes } from '@Constants';
import { IAction, ISearchPage } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: ISearchPage.IStateProps = {
	isFetchingSearchResults: false
};

type IMapPayload = ISearchPage.Actions.IMapPayload;

/**
 * REDUCER
*/
export const SearchReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionTypes.Search.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionTypes.Search.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
