'use strict';

import * as React from 'react';
import { Box, Button, Flex, Text } from 'rebass';

import { theme } from '@Config';
import { Link } from '@Components';
import { StoreDisplayItemCard } from '@Components/StoreDisplayItem';
import {
  getStoreProductPath,
  getStoreProductQs,
  getStoreItemQs,
  getStoreItemPath,
  truncateText,
  uppercaseFirst
} from '@Utilities'
import { IStoreMerchant } from '@Interfaces/Components/StoreMerchant'
import { StoreMerchantProductControls } from '../StoreMerchant/StoreMerchantProductControls'

const { palette: { grayscale }, fontSizes } = theme

type SearchResultProps = IStoreMerchant.StoreMerchantProductProps & {
  storeTitle: string
};

export const SearchResult:React.FC<SearchResultProps> = ({
  storeId,
  storePath,
  storeTitle,
  productId,
  productTitle,
  productPrice,
  productDesc = '',
  photo
}) => {
  return (
    <Box data-testid={'search-result'} mb={1}>
      <StoreDisplayItemCard
        href={getStoreProductQs(storeId, productId)}
        alias={getStoreProductPath(storePath, productId, productTitle)}
        thumbnailSrc={`${photo}`}
        title={`${uppercaseFirst(productTitle)}`}
        headingProps={{ fontSize: fontSizes[1], color: grayscale[1], pl: 1 }}
        cardAddonMarkup={<StoreMerchantProductControls />}
        cardAddonWidth={'15%'}
        contentWidth={'65%'}
      >
        <Box px={2} mb={1}>
          <Text fontSize={1} mb={0} color={grayscale[3]}>{truncateText(productDesc, 50)}</Text>
          <Flex>
            <Box mr={0}><Button variant={'successMildXs'}>₦{productPrice}</Button></Box>
            <Link href={getStoreItemQs(storeId)} alias={getStoreItemPath(storeId, storeTitle)}>
              <Button fontWeight={600} variant={'neutralXxs'}>{storeTitle}</Button>
            </Link>
          </Flex>
        </Box>
      </StoreDisplayItemCard>
    </Box>
  )
}