'use strict';

import * as React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { PageTransition } from 'next-page-transitions';
import { withRouter } from 'next/router';

import { DockerBar, Navbar } from '@Components';
import { RouteConstants } from '@Constants';
import { Consumer } from '@Containers/ContextProvider';
import { findRoutePathDepth } from '@Utilities';

const { SEARCH_ROUTE } = RouteConstants;

export const AppBaseElement = styled(Box)`
  font-family: Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: ${palette('grayscale', 6)};
  height: 100%;
`;

type AppBaseComponentProps = { router?: any }

export class AppBaseComponent extends React.Component<AppBaseComponentProps> {
  public searchInputRef:React.RefObject<HTMLInputElement>;

  state = {
    prevPathDepth: 0
  }

  constructor (props:AppBaseComponentProps) {
    super(props)
    this.searchInputRef = React.createRef();
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  componentDidMount() {
    const { router } = this.props;

    // Store the previous route depth (based on the URI scheme)
    this.setState({
      prevPathDepth: findRoutePathDepth(router.asPath)
    })

    router.events.on('routeChangeComplete', (route:string) => {
      this.setState({
        prevPathDepth: findRoutePathDepth(route)
      })
    })
  }

  handleSearchSubmit(e:React.FormEvent) {
    e.preventDefault();

    const { value } = (this.searchInputRef.current as any)

    this.props.router.push({
      pathname: SEARCH_ROUTE,
      query: { q: value }
    })
  }

  render() {
    const { children, router: {asPath, query, route} } = this.props;
    const transitionDirection = findRoutePathDepth(asPath) >= this.state.prevPathDepth ? 'left': 'right';
    const searchInputValue = route === SEARCH_ROUTE ? query.q: '';

    return (
      <AppBaseElement>
        <Consumer>
        {() => (
          <React.Fragment>
            <Navbar
              onSearchSubmit={this.handleSearchSubmit}
              searchInputRef={this.searchInputRef}
              searchInputValue={searchInputValue}
              />
              <PageTransition timeout={300} classNames={`page-container ${transitionDirection} page-transition`}>
                <React.Fragment key={route}>{children}</React.Fragment>
              </PageTransition>
            <DockerBar />
          </React.Fragment>
        )}
        </Consumer>
      </AppBaseElement>
    )  
  }
}

export const AppBase = withRouter(AppBaseComponent);