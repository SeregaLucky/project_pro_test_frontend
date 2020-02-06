import types from './questionsTypes';
import resultsTypes from './questionsTypes';
import questionsTypes from './questionsTypes';

const increaseQuestionNumber = () => {
  return {
    type: types.INCREASE_QUESTION_NUMBER,
  };
};

const decreaseQuestionNumber = () => {
  return {
    type: types.DECREASE_QUESTION_NUMBER,
  };
};

const checkAnswer = (examQuestionId, choiceId) => {
  return {
    type: types.CHECK_ANSWER,
    payload: {
      examQuestionId,
      choiceId,
    },
  };
};

const resultsFinishedStart = () => ({
  type: resultsTypes.RESULTS_FINISHED_START,
});

const resultsFinishedSuccess = () => ({
  type: resultsTypes.RESULTS_FINISHED_SUCCESS,
});

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

const sendResultStart = () => {
  return {
    type: types.SEND_RESULT_START,
  };
};

const sendResultSuccess = res => {
  console.log(res);
  return {
    type: types.SEND_RESULT_SUCCESS,
    payload: {
      res,
    },
  };
};

const sendResultFailure = err => {
  return {
    type: types.SEND_RESULT_FAILURE,
    payload: {
      err,
    },
  };
};

const resultsFinishedFailure = error => ({
  type: resultsTypes.RESULTS_FINISHED_FAILURE,
  payload: { error },
});

const resultsFailure = error => ({
  type: resultsTypes.RESULTS_FAILURE,
  payload: { error },
});

const postTestStart = () => ({
  type: questionsTypes.POST_TEST_START,
});

const postTestSuccess = data => {
  console.log(data);
  return {
    type: questionsTypes.POST_TEST_SUCCESS,
    payload: { data },
  };
};

const postTestFailure = error => ({
  type: questionsTypes.POST_TEST_FAILURE,
  payload: { error },
});

export default {
  resultsFinishedStart,
  resultsFinishedSuccess,
  resultsStart,
  resultsSuccess,
  resultsFinishedFailure,
  resultsFailure,
  postTestStart,
  postTestSuccess,
  postTestFailure,
  increaseQuestionNumber,
  decreaseQuestionNumber,
  checkAnswer,
  sendResultStart,
  sendResultSuccess,
  sendResultFailure,
};
