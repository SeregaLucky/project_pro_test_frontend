import resultsTypes from './resultsTypes';

const resultsStart = () => ({
  type: resultsTypes.RESULTS_START,
});

const resultsSuccess = results => ({
  type: resultsTypes.RESULTS_SUCCESS,
  payload: { results },
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
