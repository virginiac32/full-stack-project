import {RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS,
  DESTROY_ANNOTATION} from '../actions/annotation_actions';
import {RECEIVE_ARTWORK} from '../actions/artwork_actions';
import {RECEIVE_ANNOTATION_VOTE, DESTROY_ANNOTATION_VOTE}
  from '../actions/vote_actions';
import merge from 'lodash/merge';

const defaultState = () => ({
  annotations: {},
  currentAnnotation: null,
});

const AnnotationsReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ANNOTATION:
      const annotation = action.annotation;
      return Object.assign({}, state,
        {
          annotations: {[annotation.id]: annotation},
          currentAnnotation: annotation.id
        });
    case RECEIVE_ANNOTATIONS:
      const annotations2 = action.annotations;
      return Object.assign({}, defaultState(), {annotations: annotations2});

    // do I need the below case?
    // case RECEIVE_ARTWORK:
    //   nextState = merge({}, state, {annotations: action.annotations});
    //   nextState.currentAnnotation = null;
    //   return nextState;
    case RECEIVE_ANNOTATION_VOTE:
      nextState = merge({},state);
      if (nextState.annotations[action.vote.votable_id]) {
        nextState.annotations[action.vote.votable_id].total_score += action.vote.value;
      }
      return nextState;
    case DESTROY_ANNOTATION_VOTE:
      nextState = merge({},state);
      console.log("nstate",nextState);
      if (nextState.annotations && nextState.annotations[action.vote.votable_id]) {
        nextState.annotations[action.vote.votable_id].total_score -= action.vote.value;
      }
      return nextState;
    case DESTROY_ANNOTATION:
      nextState = Object.assign({},state);
      delete nextState.annotations[action.annotation.id];
      return nextState;
    default:
      return state;
  }
};

export default AnnotationsReducer;
