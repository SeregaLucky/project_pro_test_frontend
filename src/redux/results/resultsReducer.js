import { combineReducers } from 'redux';
import resultsTypes from './resultsTypes';

const resultsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_SUCCESS:
      return {
        answeredRight: payload.result.answeredRight,
        answeredWrong: payload.result.answeredWrong,
      };
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  result: resultsReducer,
  error: error,
});
