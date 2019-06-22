'use strict';

import * as React from 'react';
import { Box, Flex, Text } from 'rebass';

import { theme } from '@Config';
import { Button, Icon, Link, Grid } from '@Components';
import { ISearchPage } from '@Interfaces';
import { SearchResultsList } from '@Generics';
import {
  getStoreItemPath,
  getStoreProductThumbnailPath
} from '@Utilities'

import { RenderStoreProductsSkeleton } from '../StoreMerchant/StoreMerchantAtoms';
import { SearchResult } from './SearchResult'

type SearchResultsFeedProps = {
  searchResults: any,
  isFetchingSearchResults: boolean,
  stores: any
}

const { Card, CenteredText } = theme

const renderSearchErrorBanner = () => (
  <Card p={2} data-testid={'search-error-banner'}>
  <Flex flexDirection={'column'} alignItems={'center'}>
    <CenteredText mb={2}>Oops! We could not find any search results at the moment.</CenteredText>
    <Link href={'/stores'}>
      <Button variant={'primaryOutline'}>
        <Icon name="arrowLeft" size={16} />
        <Text ml={0}>Browse through stores</Text>
      </Button>
    </Link>
  </Flex>
</Card>)

const RenderSearchResultsFeed:React.FC<SearchResultsFeedProps> = ({
  searchResults,
  stores,
  isFetchingSearchResults
}) => {
  if (!isFetchingSearchResults && !searchResults.length) return renderSearchErrorBanner();

  return (
    <Box>
      {isFetchingSearchResults ?
      <RenderStoreProductsSkeleton/> :
      <SearchResultsList
        items={searchResults}
        itemRenderer={({
            id,
            store_id,
            title,
            description = '',
            photo,
            price
          }: ISearchPage.ISearchResultData) => {
            const store = stores[store_id];

            return (
              <SearchResult
                key={id}
                productId={id}
                storeId={store_id}
                storeTitle={store.name}
                storePath={getStoreItemPath(store_id, store.name)}
                photo={getStoreProductThumbnailPath(store_id, photo)}
                productTitle={title}
                productDesc={description}
                productPrice={price}
              />
          )}
        }
      />}
    </Box>
  )
}

export class SearchResultsFeed extends React.PureComponent<SearchResultsFeedProps> {
  render() {
    const { isFetchingSearchResults, searchResults, stores } = this.props;

    return (
      <Box>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <RenderSearchResultsFeed
                searchResults={searchResults}
                isFetchingSearchResults={isFetchingSearchResults}
                stores={stores}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Box>
    )
  }
}