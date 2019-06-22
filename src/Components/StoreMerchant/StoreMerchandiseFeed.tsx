'use strict';

import * as React from 'react';
import { Box } from 'rebass';

import { Grid, Button } from '@Components';
import { IStorePage } from '@Interfaces';
import { StoreProductsList } from '@Generics';
import {
  getStoreItemPath,
  getStoreProductThumbnailPath
} from '@Utilities'

import { RenderStoreProductsSkeleton } from './StoreMerchantAtoms';
import { StoreMerchantProduct } from './StoreMerchantProduct'

type StoreMerchandiseFeedProps = {
  storeId: number,
  storeTitle: string,
  storeProducts: IStorePage.IStoreProductData[],
  isFetchingStoreProducts?: boolean,
  canLoadStoreProducts?: boolean
};

type ExtraProps = {
  handleNextStoreMerchandiseFetch: () => any
}

const RenderMerchandiseFeed:React.FC<StoreMerchandiseFeedProps> = ({
  storeId,
  storeTitle,
  storeProducts,
  isFetchingStoreProducts
}) => {
  return (
    <Box>
    {storeProducts && 
      <StoreProductsList
        items={storeProducts}
        itemRenderer={({
            id,
            store_id,
            title,
            description = '',
            photo,
            price
          }: IStorePage.IStoreProductData) => (
            <StoreMerchantProduct
              key={id}
              productId={id}
              storeId={store_id}
              storePath={getStoreItemPath(storeId, storeTitle)}
              photo={getStoreProductThumbnailPath(storeId, photo)}
              productTitle={title}
              productDesc={description}
              productPrice={price}
            />
          )
        }
      />
    }
    {isFetchingStoreProducts && <RenderStoreProductsSkeleton />}
    </Box>
  )
}

export class StoreMerchandiseFeed extends React.PureComponent<StoreMerchandiseFeedProps & ExtraProps> {
  render() {
    const {
      storeId,
      storeTitle,
      storeProducts,
      isFetchingStoreProducts = false,
      canLoadStoreProducts = false,
      handleNextStoreMerchandiseFetch
    } = this.props;

    return (
      <Box>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <RenderMerchandiseFeed storeId={storeId} storeTitle={storeTitle} storeProducts={storeProducts} isFetchingStoreProducts={isFetchingStoreProducts} />
              {(canLoadStoreProducts && storeProducts.length) &&
                <Box width={1} mb={3}>
                  <Button variant={'neutralSm'} onClick={handleNextStoreMerchandiseFetch} width={1} data-testid={'load-store-products-btn'} isLoading={isFetchingStoreProducts}>
                    See more...
                  </Button>
                </Box>}
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Box>
    )
  }
}