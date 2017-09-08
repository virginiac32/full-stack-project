import React from 'react';
import ReactDOM from 'react-dom';
// import {fetchArtworks} from './util/artwork_api_util';
import {receiveArtworks, fetchArtworks, fetchArtwork} from './actions/artwork_actions';

import configureStore from './store/store';
import Root from './components/root';

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
  window.fetchArtworks = fetchArtworks;

  // on window, dispatch(fetchArtwork) then getState()
  window.fetchArtwork = fetchArtwork;

  window.receiveArtworks = receiveArtworks;

});
