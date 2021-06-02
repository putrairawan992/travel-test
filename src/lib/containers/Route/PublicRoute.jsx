import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Footer from 'lib/components/Footer';
import { Navbar } from 'lib/components/Navigation';

const PublicRoute = ({ component: Component, ...rest }) => {
  const apps = props => (
    <Fragment>
      <Navbar />
      <Component {...props} />
      <Footer />
    </Fragment>
  );

  return (
    <Route
      {...rest}
      render={props => apps(props)}
    />
  );
};

export default PublicRoute;
