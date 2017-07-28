import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';
import merge from 'lodash/merge';

const defaultState = () => ({
  errors: []
});

const ErrorsReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case CLEAR_ERRORS:
      nextState = merge({},state);
      nextState.errors = [];
      return nextState;
    default:
      return state;
  }
};

export default ErrorsReducer;
