import {RECEIVE_ARTWORK, RECEIVE_ARTWORKS,
  DESTROY_ARTWORK} from '../actions/artwork_actions';
import merge from 'lodash/merge';

const defaultState = () => ({
  artworks: {},
  currentArtwork: null,
});

const ArtworksReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ARTWORK:
      return merge({}, defaultState(),
        {
          artworks: {[action.artwork.id]: action.artwork},
          currentArtwork: action.artwork.id
        });
    case RECEIVE_ARTWORKS:
      const artworks = action.artworks;
      return merge({}, defaultState(), {artworks: artworks});
    case DESTROY_ARTWORK:
      nextState = merge({},state);
      delete nextState.artworks[action.artwork.id];
      return nextState;
    default:
      return state;
  }
};

export default ArtworksReducer;
