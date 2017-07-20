import {RECEIVE_ARTWORK_ERRORS, RECEIVE_ARTWORK, RECEIVE_ARTWORKS,
  DESTROY_ARTWORK, fetchArtworks, fetchArtwork, createArtwork,
  destroyArtwork} from '../actions/artwork_actions';
import {merge} from 'lodash/merge';

const defaultState = () => ({
  artworks: {},
  currentArtwork: null,
});

const ArtworksReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState = [];
  switch (action.type) {
    case RECEIVE_ARTWORK:
      const artwork = action.artwork;
      return merge({}, state,
        {
          artworks: {[artwork.id]: artwork},
          currentArtwork: artwork.id
        });
    case RECEIVE_ARTWORKS:
      const artworks = action.artworks;
      return merge({}, state, {artworks: artworks});
    case DESTROY_ARTWORK:
      nextState = merge({},state);
      delete nextState.artworks[action.id];
      return nextState;
    // case RECEIVE_ARTWORK_ERRORS:
      // const errors = action.errors;
      // return Object.assign({}, state, {errors});
    default:
      return state;
  }
};

export default ArtworksReducer;
