import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import RouterManager from 'router';
import Loading from 'lib/components/Loading';

const App = ({ progress }) => (
  <Fragment>
    <RouterManager />
    <Loading shown={progress} />
  </Fragment>
);

const mapStateToProps = state => ({
  progress: state.userInterface.isLoading
});

export default connect(mapStateToProps)(App);
