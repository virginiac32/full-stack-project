import {RECEIVE_ARTWORK, RECEIVE_ARTWORKS,
  DESTROY_ARTWORK} from '../actions/artwork_actions';
// import {RECEIVE_COMMENT, DESTROY_COMMENT} from '../actions/comment_actions';
// import {RECEIVE_COMMENT_VOTE, DESTROY_COMMENT_VOTE}
//   from '../actions/vote_actions';
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
      console.log("action",action);
      // const artwork = action.artwork;
      return merge({}, defaultState(),
        {
          artworks: {[action.artwork.id]: action.artwork},
          currentArtwork: action.artwork.id
        });
    // case RECEIVE_COMMENT:
    //   const comment = action.comment;
    //   const comment_id = comment.id;
    //   nextState = merge({},state);
    //   if (nextState.artworks[comment.artwork_id] && nextState.artworks[comment.artwork_id].comments) {
    //     nextState.artworks[comment.artwork_id].comments[action.comment.id] = action.comment;
    //   } else {
    //     nextState.artworks[comment.artwork_id]['comments'] = {comment_id: comment};
    //   }
    //   return nextState;
    // case DESTROY_COMMENT:
    //   nextState = merge({},state);
    //   delete nextState.artworks[nextState.currentArtwork].comments[action.comment.id];
    //   return nextState;
    // case RECEIVE_COMMENT_VOTE:
    //   nextState = merge({},state);
    //   console.log("nexts",nextState);
    //   if (nextState.artworks[nextState.currentArtwork].comments[action.vote.votable_id]) {
    //     nextState.artworks[nextState.currentArtwork].comments[action.vote.votable_id].total_score += action.vote.value;
    //   }
    //   return nextState;
    // case DESTROY_COMMENT_VOTE:
    //   nextState = merge({},state);
    //   if (nextState.artworks[nextState.currentArtwork].comments[action.vote.votable_id]) {
    //     nextState.artworks[nextState.currentArtwork].comments[action.vote.votable_id].total_score -= action.vote.value;
    //   }
    //   return nextState;
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
