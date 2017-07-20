import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import {login,signup,logout} from './actions/session_actions';
import {fetchArtworks, fetchArtwork, createArtwork, destroyArtwork} from './actions/artwork_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchArtwork = fetchArtwork;
  window.fetchArtworks = fetchArtworks;
  window.createArtwork = createArtwork;
  window.destroyArtwork = destroyArtwork;

});
