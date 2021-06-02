import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.final.css';
import App from './App';
import store from 'store';
import { Provider } from 'react-redux';
import { setCurrentUser, authLogout } from 'store/actions/Auth';
import jwtDecode from 'jwt-decode';
import setAuthToken from 'services/setAuthToken';
import { BrowserRouter as Router } from 'react-router-dom';

const localToken = localStorage.getItem(`${process.env.REACT_APP_PREFIX_STORAGE}:token`);

if (localToken) {
  const token = localToken;
  const decoded = jwtDecode(token);

  setAuthToken(token);
  store.dispatch(setCurrentUser(decoded));

  if (decoded.exp < Date.now() / 1000) {
    store.dispatch(authLogout());
  };
};

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
	document.getElementById('root')
);
