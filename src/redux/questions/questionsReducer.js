import { combineReducers } from 'redux';
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

const passedQuestionsReduсer = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const resultReduсer = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  questions: questionsReduсer,
  passedQuestions: passedQuestionsReduсer,
  result: resultReduсer,
});
