import { ActionTypes } from "@Constants";

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
	})
}