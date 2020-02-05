const getQuestionNumber = state => state.questions.questionNumber;
const getQuestions = state =>
  state.questions.questions && state.questions.questions.questions;
const getResult = state => state.questions.resultTest;
const getErr = state => state.questions.err;
const getIsResultSended = state => state.questions.isResultSended;

export const getResults = state => {
  return state.questions.result;
};

export const getResultsById = (state, examId) => {
  const results = getResults(state);
  return results.map(result => result.id === examId);
};

export default {
  getQuestionNumber,
  getQuestions,
  getResult,
  getIsResultSended,
  getErr,
};
