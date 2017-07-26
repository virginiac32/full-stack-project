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
  let nextState;
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state,
        {
          comments: {[action.comment.id]: action.comment},
          currentComment: action.comment.id
        });
    case RECEIVE_COMMENTS:
      nextState = Object.assign({}, defaultState());
      nextState.comments = merge(nextState.comments, action.comments);
      return nextState;
    case DESTROY_COMMENT:
      nextState = merge({},state);
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
