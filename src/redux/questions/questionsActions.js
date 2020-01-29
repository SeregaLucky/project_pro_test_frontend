import questionsTypes from './questionsTypes';

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
  postTestStart,
  postTestSuccess,
  postTestFailure,
};
