import resultsTypes from './resultsTypes';

const resultsStart = () => ({
  type: resultsTypes.RESULTS_START,
});

const resultsSuccess = result => ({
  type: resultsTypes.RESULTS_SUCCESS,
  payload: { result },
});

const resultsFailure = error => ({
  type: resultsTypes.RESULTS_FAILURE,
  payload: { error },
});

export default {
  resultsStart,
  resultsSuccess,
  resultsFailure,
};
