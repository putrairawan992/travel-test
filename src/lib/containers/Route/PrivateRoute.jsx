import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Navbar } from 'lib/components/Navigation';

const PrivateRoute = ({ component: Component, noSidebar, auth, fullSidebar, roles, ...rest }) => {
  const apps = props => (
    <section className="app">
      <Navbar/>
      <Sidebar />

      <section className="app-layout">
        <section className="app-content">
          <Component {...props} />
        </section>
      </section>
    </section>
  );

  return (
    <Route
      {...rest}
      render={props => apps(props)}
    />
  );
};

PrivateRoute.defaultProps = {
  auth: false
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  Component: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
