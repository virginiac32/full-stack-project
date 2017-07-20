import {RECEIVE_ARTWORK_ERRORS} from '../actions/artwork_actions';
import {merge} from 'lodash/merge';

const defaultState = () => ({
  errors: []
});

const ErrorsReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState = [];
  switch (action.type) {
    case RECEIVE_ARTWORK_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};
