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

const addToResult = results => {
  return {
    type: types.ADD_TO_RESULT,
    payload: {
      answers: results,
    },
  };
};

const sendResultStart = () => {
  return {
    type: types.SEND_RESULT_START,
  };
};

const sendResultSuccess = () => {
  return {
    type: types.SEND_RESULT_SUCCESS,
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
  resultsStart,
  resultsSuccess,
  resultsFailure,
  postTestStart,
  postTestSuccess,
  postTestFailure,
  increaseQuestionNumber,
  decreaseQuestionNumber,
  checkAnswer,
  addToResult,
  sendResultStart,
  sendResultSuccess,
  sendResultFailure,
};
