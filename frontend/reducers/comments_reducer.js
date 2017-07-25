import {RECEIVE_COMMENT, RECEIVE_COMMENTS,
  DESTROY_COMMENT} from '../actions/comment_actions';
import {RECEIVE_COMMENT_VOTE, DESTROY_COMMENT_VOTE}
  from '../actions/vote_actions';
import merge from 'lodash/merge';

const defaultState = () => ({
  comments: {},
  currentComment: null,
});

const CommentsReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState = [];
  switch (action.type) {
    case RECEIVE_COMMENT:
      const comment = action.comment;
      return Object.assign({}, state,
        {
          comments: {[comment.id]: comment},
          currentComment: comment.id
        });
    case RECEIVE_COMMENTS:
      const comments = action.comments;
      return Object.assign({}, state, {comments: comments});
    case DESTROY_COMMENT:
      nextState = Object.assign({},state);
      delete nextState.comments[action.comment.id];
      return nextState;
    case RECEIVE_COMMENT_VOTE:
      nextState = merge({},state);
      if (nextState.comments[action.vote.votable_id]) {
        nextState.comments[action.vote.votable_id].total_score += action.vote.value;
      }
      return nextState;
    case DESTROY_COMMENT_VOTE:
      nextState = merge({},state);
      if (nextState.comments[action.vote.votable_id]) {
        nextState.comments[action.vote.votable_id].total_score -= action.vote.value;
      }
      return nextState;
    default:
      return state;
  }
};

export default CommentsReducer;
