'use strict';

import * as React from 'react';
import { Box, Button, Flex, Text } from 'rebass';

import { theme } from '@Config';
import { StoreDisplayItemCard } from '@Components/StoreDisplayItem';
import { IStoreMerchant } from '@Interfaces/Components/StoreMerchant'
import {
  getStoreProductPath,
  getStoreProductQs,
  truncateText
} from '@Utilities'
import { StoreMerchantProductControls } from './StoreMerchantProductControls'

const { palette: { grayscale }, fontSizes } = theme

export const StoreMerchantProduct:React.FC<IStoreMerchant.StoreMerchantProductProps> = ({
  storeId,
  storePath,
  productId,
  productTitle,
  productPrice,
  productDesc = '',
  photo
}) => {
  return (
    <Box data-testid={'store-merchant-product'} mb={1}>
      <StoreDisplayItemCard
        href={getStoreProductQs(storeId, productId)}
        alias={getStoreProductPath(storePath, productId, productTitle)}
        thumbnailSrc={`${photo}`}
        title={productTitle}
        headingProps={{
          fontSize: fontSizes[1],
          color: grayscale[1],
          pl: 1
        }}
        cardAddonMarkup={<StoreMerchantProductControls />}
        cardAddonWidth={'20%'}
        contentWidth={'60%'}
      >
        <Box px={2} mb={1}>
          <Text fontSize={1} mb={0} color={grayscale[3]}>{truncateText(productDesc, 50)}</Text>
          <Button variant={'successMildXs'}>
            <Flex alignItems={'center'}>
              <Text>N{productPrice}</Text>
              {/* {hasCollapsedSection && <Icon
                size={theme.space[1]}
                name="chevronDown"
                style={{
                  transition: "transform 0.5s ease",
                  // TODO: make this dynamic
                  transform: `rotate(0deg)`
                }}
              />} */}
            </Flex>
          </Button>
        </Box>
      </StoreDisplayItemCard>
    </Box>
  )
}