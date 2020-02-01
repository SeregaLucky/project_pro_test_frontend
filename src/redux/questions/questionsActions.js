import resultsTypes from './questionsTypes';
import questionsTypes from './questionsTypes';

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

const postTestStart = () => ({
  type: questionsTypes.POST_TEST_START,
});

const postTestSuccess = data => ({
  type: questionsTypes.POST_TEST_SUCCESS,
  payload: { data },
});

const postTestFailure = error => ({
  type: questionsTypes.POST_TEST_FAILURE,
  payload: { error },
});

export default {
  resultsStart,
  resultsSuccess,
  resultsFailure,
  postTestStart,
  postTestSuccess,
  postTestFailure,
};
