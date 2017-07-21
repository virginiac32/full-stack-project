import * as ArtworkAPIUtil from '../util/artwork_api_util';
export const RECEIVE_ARTWORK = 'RECEIVE_ARTWORK';
export const RECEIVE_ARTWORKS = 'RECEIVE_ARTWORKS';
export const DESTROY_ARTWORK = 'DESTROY_ARTWORK';
export const RECEIVE_ARTWORK_ERRORS = 'RECEIVE_ARTWORK_ERRORS';

// synchronous action creators
export const receiveArtwork = artwork => ({
  type: RECEIVE_ARTWORK,
  artwork
});

export const receiveArtworks = artworks => ({
  type: RECEIVE_ARTWORKS,
  artworks
});

export const receiveArtworkErrors = errors => ({
  type: RECEIVE_ARTWORK_ERRORS,
  errors
});

export const destroyArtwork = artwork => ({
  type: DESTROY_ARTWORK,
  artwork
});

// async thunk action creators
export const fetchArtwork = (id) => dispatch => {
  return ArtworkAPIUtil.fetchArtwork(id).then(
    artwork2 => dispatch(receiveArtwork(artwork2))
  );
};

export const fetchArtworks = () => dispatch => {
  return ArtworkAPIUtil.fetchArtworks().then(
    artworks => dispatch(receiveArtworks(artworks))
  );
};

export const createArtwork = (artwork) => dispatch => {
  return ArtworkAPIUtil.createArtwork(artwork).then(
    artwork2 => dispatch(receiveArtwork(artwork2)),
    errors => dispatch(receiveArtworkErrors(errors.responseJSON))
  );
};

export const deleteArtwork = (artwork) => dispatch => {
  return ArtworkAPIUtil.deleteArtwork(artwork).then(
    artwork2 => dispatch(destroyArtwork(artwork2))
  );
};
