import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Head from 'next/head'
import { IStorePage, IStore } from '@Interfaces';
import { StoreActions } from '@Store/Store/actions';
import { getStore, getStoreProducts, getIsFetchingStoreProducts } from '@Store/Store/selectors';
import {
	StoreMerchantBrief,
	StoreMerchantBriefWrapper,
	StoreMerchantBriefSkeleton,
	StoreMerchandiseFeed,
} from '@Components';

import { extractIdFromSlug } from '@Utilities';

export class StoreItemPage extends React.Component<IStorePage.IProps, IStorePage.IState> {
	id:number;

	constructor (props:IStorePage.IProps) {
		super(props);
		this.id = 0;
	}

	componentDidMount() {
		const { slug } = this.props.router.query;

		this.id = extractIdFromSlug(slug);

		this.props.getStore(this.id).then(() => this.props.fetchStoreProducts(this.id))
	}

	public render(): JSX.Element {
		const { store, products, isFetchingStoreProducts } = this.props
		const activeStore = store(this.id);
		const storeProducts = products(this.id);
	
		let brief = <StoreMerchantBriefSkeleton />;
		const storeIsReady = typeof activeStore === 'object';

		if (storeIsReady) {
			brief = (
				<StoreMerchantBrief
					title={activeStore.name}
					serviceFee={activeStore.service_fee}
					brandSrc={`/static/img/${activeStore.brand}`}	
				/>
			)
		}

		return (
			<>
				<Head>
					{ storeIsReady ?
						<title>Deliveries from {activeStore.name} on Instachaw</title>:
						<title>Fastest Deliveries on Instachaw</title>
					}
				</Head>

				<StoreMerchantBriefWrapper>{brief}</StoreMerchantBriefWrapper>
				{ storeIsReady &&
					<StoreMerchandiseFeed
						storeTitle={activeStore.name}
						storeId={activeStore.id}
						storeProducts={storeProducts}
						isFetchingStoreProducts={isFetchingStoreProducts}
					/>
				}
			</>
		);
	}
}

const mapStateToProps = (state: IStore) => {
  return {
		store: (id:number) => getStore(id)(state),
		products: (storeId:number) => getStoreProducts(storeId)(state),
		isFetchingStoreProducts: getIsFetchingStoreProducts(state),
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		Map: bindActionCreators(StoreActions.Map, dispatch),
		fetchStoreProducts: bindActionCreators(StoreActions.fetchStoreProducts, dispatch),
		getStore: bindActionCreators(StoreActions.getStore, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(StoreItemPage);