import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import { Heading } from 'rebass';

import { RouteConstants } from '@Constants'
import { Grid, SearchResultsFeed } from '@Components';
import { theme } from '@Config';
import { ISearchPage, IStore } from '@Interfaces';
import { uppercaseFirst } from '@Utilities';
import { SearchActions } from '@Store/Search/actions';
import { getSearchResults, getIsFetchingSearchResults } from '@Store/Search/selectors';

const { space, palette: { grayscale } } = theme

export class SearchPage extends React.Component<ISearchPage.IProps, ISearchPage.IState> {
  constructor (props: ISearchPage.IProps) {
    super(props);

    this.state = {
      searchQuery: ''
    }
  }

  componentDidMount() {
    const { fetchSearchResults, router } = this.props;
    const q = window.location.search.split('?q=')[1];
    
    this.setState({ searchQuery: q });
    fetchSearchResults(q)

    router.events.on('beforeHistoryChange', (route:string) => {
      const query = window.location.search.split('?q=')[1];

      if (query !== this.state.searchQuery) return;

      this.setState({
        searchQuery: query
      })
      fetchSearchResults(query)
    })
  }

  componentWillUnmount() {
    this.props.router.events.off('beforeHistoryChange');
  }

	public render(): JSX.Element {
    const { searchQuery } = this.state;
    const { getSearchResults, stores, isFetchingSearchResults } = this.props;
    const searchResults = getSearchResults();

		return (
			<>
				<Head><title>Results for {uppercaseFirst(searchQuery)} | Instachaw</title></Head>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <Heading data-testid={'search-screen-title'} margin={`${space[1]} 0`} color={grayscale[2]} fontSize={3}>
              {`${isFetchingSearchResults ? 'Fetching': ''} Search Results for "${uppercaseFirst(searchQuery)}".`}
              </Heading>
              <SearchResultsFeed
                isFetchingSearchResults={isFetchingSearchResults}
                searchResults={searchResults}
                stores={stores()}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
			</>
		);
	}
}

const mapStateToProps = (state: IStore) => {
  return {
    getSearchResults: () => getSearchResults()(state),
    stores: () => state.entities.stores,
    isFetchingSearchResults: getIsFetchingSearchResults(state)
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchSearchResults: bindActionCreators(SearchActions.fetchSearchResults, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);