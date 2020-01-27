import resultsTypes from './resultsTypes';

const resultsStart = () => ({
  type: resultsTypes.RESULTS_START,
});

const resultsSuccess = ({ id }) => ({
  type: resultsTypes.RESULTS_SUCCESS,
  payload: { id },
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
