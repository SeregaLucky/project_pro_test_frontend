import { combineReducers } from 'redux';
import questionsTypes from './questionsTypes';

const questionsReduсer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.POST_TEST_SUCCESS:
      return payload.data.questions;

    case questionsTypes.CHECK_ANSWER:
      const questions = state.map(question => {
        if (payload.examQuestionId === question.id) {
          return { ...question, ...{ optionChoosed: payload.choiceId } };
        }
        return question;
      });
      return questions;

    case questionsTypes.RESET_QUESTIONS:
      return null;

    default:
      return state;
  }
};

const examIdReduсer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.POST_TEST_SUCCESS:
      return payload.data.exam.id;

    case questionsTypes.RESET_QUESTIONS:
      return null;

    default:
      return state;
  }
};

const isResultSendedReducer = (state = false, { type, payload }) => {
  switch (type) {
    case questionsTypes.SEND_RESULT_SUCCESS:
      const isResultSended =
        payload.res && payload.res.status === 204 ? true : false;
      return isResultSended;

    case questionsTypes.RESET_QUESTIONS:
      return false;

    default:
      return state;
  }
};

const finishedReducer = (state = false, { type }) => {
  switch (type) {
    case questionsTypes.RESULTS_FINISHED_SUCCESS:
      return true;

    case questionsTypes.RESET_QUESTIONS:
      return false;

    default:
      return state;
  }
};

const resultsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.RESULTS_SUCCESS:
      return {
        answeredRight: payload.answeredRight,
        answeredWrong: payload.answeredWrong,
      };

    case questionsTypes.RESET_QUESTIONS:
      return null;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.POST_TEST_FAILURE:
    case questionsTypes.SEND_RESULT_FAILURE:
    case questionsTypes.RESULTS_FINISHED_FAILURE:
    case questionsTypes.RESULTS_FAILURE:
      return payload.error;

    case questionsTypes.POST_TEST_START:
    case questionsTypes.SEND_RESULT_START:
    case questionsTypes.RESULTS_FINISHED_START:
    case questionsTypes.RESULTS_START:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  examId: examIdReduсer,
  questions: questionsReduсer,
  isResultSended: isResultSendedReducer,
  finished: finishedReducer,
  result: resultsReducer,
  error: errorReducer,
});
