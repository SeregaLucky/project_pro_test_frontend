import { combineReducers } from 'redux';

const questionsReduсer = (state = null, { type, payload }) => {
  switch (type) {
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
