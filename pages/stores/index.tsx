import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Head from 'next/head'

import { StoresFeed } from '@Components';
import { IStoresPage, IStore } from '@Interfaces';
import { StoreActions } from '@Store/Store/actions';

export class StoresPage extends React.Component<IStoresPage.IProps, IStoresPage.IState> {
	public render(): JSX.Element {
		return (
			<>
				<Head>
					<title>Nearby Stores | Instachaw</title>
				</Head>
				<StoresFeed />
			</>
		);
	}
}

const mapStateToProps = (state: IStore) => {
  const { stores } = state;

  return {
    stores
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		Map: bindActionCreators(StoreActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(StoresPage);