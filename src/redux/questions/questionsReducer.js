import { combineReducers } from 'redux';

const questionsReduser = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const passedQuestionsReduser = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  questions: questionsReduser,
  passedQuestions: passedQuestionsReduser,
});
