import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_COMMENT_VOTE, DESTROY_COMMENT_VOTE, RECEIVE_ANNOTATION_VOTE,
  DESTROY_ANNOTATION_VOTE} from '../actions/vote_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  let nextState;
  let vote_id;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, defaultState, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, {errors});
    case RECEIVE_ANNOTATION_VOTE:
      vote_id = action.vote.votable_id;
      nextState = merge({},state);
      if (!nextState.currentUser.votes.Annotation) {
        nextState.currentUser.votes.Annotation = {};
      }
      nextState.currentUser.votes.Annotation[vote_id] = {
        id: action.vote.id,
        user_id: state.currentUser.id,
        votable_id: vote_id,
        votable_type: "Annotation",
        value: action.vote.value
      };
      return nextState;
    case RECEIVE_COMMENT_VOTE:
      vote_id = action.vote.votable_id;
      nextState = merge({},state);
      if (!nextState.currentUser.votes.Comment) {
        nextState.currentUser.votes.Comment = {};
      }
      nextState.currentUser.votes.Comment[vote_id] = {
        id: action.vote.id,
        user_id: state.currentUser.id,
        votable_id: vote_id,
        votable_type: "Comment",
        value: action.vote.value
      };
      return nextState;
    case DESTROY_ANNOTATION_VOTE:
      nextState = merge({},state);
      delete nextState.currentUser.votes.Annotation[action.vote.votable_id];
      return nextState;
    case DESTROY_COMMENT_VOTE:
      nextState = merge({},state);
      delete nextState.currentUser.votes.Comment[action.vote.votable_id];
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
