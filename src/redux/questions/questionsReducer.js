import { combineReducers } from 'redux';
import resultsTypes from './questionsTypes';
import questionsTypes from './questionsTypes';

const questionsReduсer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.POST_TEST_SUCCESS:
      return {
        idTestBlock: payload.data.exam.id,
        questions: payload.data.questions,
      };
    default:
      return state;
  }
};

const resultsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_SUCCESS:
      return {
        answeredRight: payload.answeredRight,
        answeredWrong: payload.answeredWrong,
      }
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  questions: questionsReduсer,
  result: resultsReducer,
  error: error,
});
