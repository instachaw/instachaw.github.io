'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AppActions } from '@Store/App/actions';
import { RootComponent } from '@Components';

class AppContainer extends React.Component {
  render () {
    return (
      <RootComponent>
        {this.props.children}
      </RootComponent>      
    );
  }
}

const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = ( dispatch: Dispatch ) => {
  return {
    Map: bindActionCreators(AppActions.Map, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)