import {RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS,
  DESTROY_ANNOTATION} from '../actions/annotation_actions';
import {RECEIVE_ARTWORK} from '../actions/artwork_actions';
import {merge} from 'lodash/merge';

const defaultState = () => ({
  annotations: {},
  currentAnnotation: null,
});

const AnnotationsReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState = [];
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
      return Object.assign({}, state, {annotations: annotations2});

    // do I need the below case?
    case RECEIVE_ARTWORK:
      nextState = Object.assign({}, state, {annotations: action.annotations});
      nextState.currentAnnotation = null;
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
