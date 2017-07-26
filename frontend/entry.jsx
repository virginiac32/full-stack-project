import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import {login,signup,logout} from './actions/session_actions';
// import {fetchArtwork} from './util/artwork_api_util';
import {fetchArtworks, fetchArtwork, createArtwork, deleteArtwork} from './actions/artwork_actions';
import { fetchAnnotation, fetchAnnotations, createAnnotation, deleteAnnotation, updateAnnotation} from './actions/annotation_actions';
import {selectAllArtworks, selectArtworkComments} from './reducers/selectors';
import { fetchComment, fetchComments, createComment, deleteComment, updateComment} from './actions/comment_actions';
import { createVote, deleteVote} from './actions/vote_actions';
// import {fetchComments} from './util/comment_api_util';
// import {fetchAnnotations} from './util/annotation_api_util';

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
  window.deleteArtwork = deleteArtwork;
  window.fetchAnnotation = fetchAnnotation;
  window.fetchAnnotations = fetchAnnotations;
  window.updateAnnotation = updateAnnotation;
  window.createAnnotation = createAnnotation;
  window.deleteAnnotation = deleteAnnotation;
  window.selectAllArtworks = selectAllArtworks;
  window.fetchComment = fetchComment;
  window.fetchComments = fetchComments;
  window.createComment = createComment;
  window.deleteComment = deleteComment;
  // window.updateComment = updateComment;
  window.selectArtworkComments = selectArtworkComments;
  window.createVote = createVote;
  window.deleteVote = deleteVote;
});
