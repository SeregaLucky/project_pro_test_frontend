import questionsTypes from './questionsTypes';

const checkAnswer = (examQuestionId, choiceId) => ({
  type: questionsTypes.CHECK_ANSWER,
  payload: { examQuestionId, choiceId },
});

const resultsFinishedStart = () => ({
  type: questionsTypes.RESULTS_FINISHED_START,
});

const resultsFinishedSuccess = () => ({
  type: questionsTypes.RESULTS_FINISHED_SUCCESS,
});

const resultsStart = () => ({
  type: questionsTypes.RESULTS_START,
});

const resultsSuccess = ({ answeredRight, answeredWrong }) => ({
  type: questionsTypes.RESULTS_SUCCESS,
  payload: { answeredRight, answeredWrong },
});

const sendResultStart = () => ({
  type: questionsTypes.SEND_RESULT_START,
});

const sendResultSuccess = res => ({
  type: questionsTypes.SEND_RESULT_SUCCESS,
  payload: { res },
});

const sendResultFailure = error => ({
  type: questionsTypes.SEND_RESULT_FAILURE,
  payload: { error },
});

const resultsFinishedFailure = error => ({
  type: questionsTypes.RESULTS_FINISHED_FAILURE,
  payload: { error },
});

const resultsFailure = error => ({
  type: questionsTypes.RESULTS_FAILURE,
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

const resetQuestions = () => ({
  type: questionsTypes.RESET_QUESTIONS,
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
  checkAnswer,
  sendResultStart,
  sendResultSuccess,
  sendResultFailure,
  resetQuestions,
};
