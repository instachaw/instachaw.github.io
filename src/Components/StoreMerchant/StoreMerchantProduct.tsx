'use strict';

import * as React from 'react';
import { Box, Button, Flex, Text } from 'rebass';

import { theme } from '@Config';
import { Icon } from '@Components';
import { StoreDisplayItemCard } from '@Components/StoreDisplayItem';
import { getStoreProductPath, truncateText } from '@Utilities'
import { StoreMerchantProductControls } from './StoreMerchantProductControls'

const { palette: { grayscale } } = theme

type StoreMerchantProductProps = {
  storeId: number,
  storePath: string,
  productId: number,
  productTitle: string,
  productDesc?: string,
  photo: string,
  hasCollapsedSection?: boolean
};

export const StoreMerchantProduct:React.FC<StoreMerchantProductProps> = ({
  storeId,
  storePath,
  productId,
  productTitle,
  productDesc = '',
  photo,
  hasCollapsedSection = false
}) => {
  return (
    <Box data-testid={'store-merchant-product'} mb={1}>
      <StoreDisplayItemCard
        href={`/store?slug=store-${storeId}&productId=${productId}`}
        alias={getStoreProductPath(storePath, productId, productTitle)}
        thumbnailSrc={`${photo}`}
        title={productTitle}
        headingProps={{
          fontSize: theme.fontSizes[1],
          color: theme.palette.grayscale[1],
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
              <Text>N200</Text>
              {hasCollapsedSection && <Icon
                size={theme.space[1]}
                name="chevronDown"
                style={{
                  transition: "transform 0.5s ease",
                  transform: true ? `rotate(0deg)` : `rotate(180deg)`
                }}
              />}
            </Flex>
          </Button>
        </Box>
      </StoreDisplayItemCard>
    </Box>
  )
}