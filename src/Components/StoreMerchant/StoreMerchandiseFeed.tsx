import * as React from 'react';

import { Box, Heading } from 'rebass';
import { Grid } from '@Components';
import { theme } from '@Config';
import { IStorePage } from '@Interfaces';
import { StoreProductsList, StoresSkeletonList } from '@Generics';
import {
  getStoreItemPath,
  getStoreProductThumbnailPath,
  generateRandString
} from '@Utilities'

import { StoreProductItemSkeleton } from './StoreMerchantAtoms';
import { StoreMerchantProduct } from './StoreMerchantProduct'

type StoreMerchandiseFeedProps = {
  storeId: number,
  storeTitle: string,
  storeProducts: IStorePage.IStoreProductData[],
  isFetchingStoreProducts?: boolean
};

export const StoreMerchandiseFeed:React.FC<StoreMerchandiseFeedProps> = ({
  storeId,
  storeTitle,
  storeProducts,
  isFetchingStoreProducts = false
}) => {
  return (
    <Box padding={`${theme.space[1]} 0`}>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Heading mb={2} color={theme.palette.grayscale[1]} data-testid={'store-merchandise-screen-title'}>
              Make your choices.
            </Heading>

            {storeProducts && 
              <StoreProductsList
                items={storeProducts}
                itemRenderer={({
                    id,
                    store_id,
                    title,
                    description = '',
                    photo
                  }: IStorePage.IStoreProductData) => (
                    <StoreMerchantProduct
                      key={id}
                      productId={id}
                      storeId={store_id}
                      storePath={getStoreItemPath(storeId, storeTitle)}
                      photo={getStoreProductThumbnailPath(storeId, photo)}
                      productTitle={title}
                      productDesc={description}
                    />
                  )
                }
              />
            }
            {isFetchingStoreProducts && 
              <Box>
                <StoresSkeletonList
                  items={generateRandString(5).split('')}
                  itemRenderer={(a:string, key:number) => (
                    <Box key={key} marginBottom={theme.space[1]}>
                      <StoreProductItemSkeleton />
                    </Box>
                  )}
                />
              </Box>
            }
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Box>
  )
}