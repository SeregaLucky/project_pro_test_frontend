import { combineReducers } from 'redux';
import resultsTypes from './resultsTypes';

const resultsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_STATUS:
      return payload.results;
    case resultsTypes.RESULTS_SUCCESS:
      return { answeredRight: null, answeredWrong: null };
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
  results: resultsReducer,
  error: error,
});
