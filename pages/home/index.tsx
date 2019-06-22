import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IHomePage, IStore } from '@Interfaces';
import { HomeActions } from '@Store/Home/actions';

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public render(): JSX.Element {
		return (
			<div className="title">
				<h2>Welcome to Instachaw v2</h2>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		Map: bindActionCreators(HomeActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);