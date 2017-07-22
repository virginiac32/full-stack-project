import {RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS,
  DESTROY_ANNOTATION} from '../actions/annotation_actions';
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
    // case RECEIVE_ANNOTATIONS:
    //   const annotations = action.annotations;
    //   return Object.assign({}, state, {annotations: annotations});
    case DESTROY_ANNOTATION:
      nextState = Object.assign({},state);
      delete nextState.annotations[action.annotation.id];
      return nextState;
    default:
      return state;
  }
};

export default AnnotationsReducer;
