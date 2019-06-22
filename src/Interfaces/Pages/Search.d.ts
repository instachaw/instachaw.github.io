import { Props } from 'react';
import { IStorePage } from '@Interfaces/Pages/Store'

declare module ISearchPage {
	export interface IOwnProps extends Props<{}> {
		router: any
	}

  export interface IState {
		searchQuery: string;
	}
	
	export interface IStateProps {
		isFetchingSearchResults: boolean;
		getSearchResults?: any;
		stores?: any;
	}
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse,
		fetchSearchResults(searchQuery:string): any;
  }
    
	export type IProps = IOwnProps & IStateProps & IDispatchProps;

  module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }
	}

	export type ISearchResultData = IStorePage.IStoreProductData & {
		store: IStorePage.IStoreData
	}	
}