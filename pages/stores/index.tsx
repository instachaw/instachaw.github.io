import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Head from 'next/head'

import { StoresFeed } from '@Components';
import { IStoresPage, IStore } from '@Interfaces';
import { StoreActions } from '@Store/Store/actions';
import { getStores, getIsFetchingStores } from '@Store/Store/selectors';

export class StoresPage extends React.Component<IStoresPage.IProps, IStoresPage.IState> {
	componentDidMount() {
		(this.props as any).fetchStores();
	}

	public render(): JSX.Element {
		const { isFetchingStores, stores } = this.props;
		
		return (
			<>
				<Head>
					<title>Stores Close To You | Instachaw</title>
				</Head>
				<StoresFeed
					isFetchingStores={isFetchingStores}
					stores={stores}
				/>
			</>
		);
	}
}

const mapStateToProps = (state: IStore) => {
  return {
		isFetchingStores: getIsFetchingStores(state),
		stores: getStores(state)
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	fetchStores: bindActionCreators(StoreActions.fetchStores, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoresPage);