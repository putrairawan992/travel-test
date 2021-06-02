import React from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from 'lib/containers/Route';

import Home from 'pages/Home';
import Destination from 'pages/Destination';
import Contact from 'pages/Contact';
import Dashboard from 'pages/Dashboard';

const RouterManager = () => (
  <Switch>
    <PublicRoute exact path='/' component={Home} />
    <PublicRoute path='/destination/:id' component={Destination} />
    <PublicRoute path='/contact' component={Contact} />
    <PrivateRoute path='/dashboard' component={Dashboard} />
  </Switch>
);

export default RouterManager;
