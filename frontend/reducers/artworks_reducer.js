import {RECEIVE_ARTWORK_ERRORS, RECEIVE_ARTWORK, RECEIVE_ARTWORKS,
  DESTROY_ARTWORK, fetchArtworks, fetchArtwork, createArtwork,
  destroyArtwork} from '../actions/artwork_actions';

const defaultState = {
  errors: []
};

const ArtworksReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTWORK:
      // const artwork = action.artwork;
      // return Object.assign({}, defaultState, {
      //   artwork
      // });
    case RECEIVE_ARTWORKS:
    case DESTROY_ARTWORK:
    case RECEIVE_ARTWORK_ERRORS:
      // const errors = action.errors;
      // return Object.assign({}, state, {errors});
    default:
      return state;
  }
};

export default ArtworksReducer;
