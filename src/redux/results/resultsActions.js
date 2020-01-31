import resultsTypes from './resultsTypes';

const resultsStart = () => ({
  type: resultsTypes.RESULTS_START,
});

const resultsSuccess = ({ answeredRight, answeredWrong }) => {
  return {
    type: resultsTypes.RESULTS_SUCCESS,
    payload: {
      answeredRight,
      answeredWrong,
    },
  };
};

const resultsFailure = error => ({
  type: resultsTypes.RESULTS_FAILURE,
  payload: { error },
});

export default {
  resultsStart,
  resultsSuccess,
  resultsFailure,
};
