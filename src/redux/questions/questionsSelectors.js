const getQuestionNumber = state => state.questions.questionNumber;

const getQuestions = state => state.questions && state.questions.questions;

const getExamId = state => state.questions && state.questions.examId;

const getResult = state => state.questions.resultTest;

const getIsResultSended = state => state.questions.isResultSended;

const getFinishedResults = state => state.questions.finished;

const getResults = state => state.questions.result;

const getError = state => state.questions.error;

export default {
  getQuestionNumber,
  getQuestions,
  getExamId,
  getResult,
  getIsResultSended,
  getFinishedResults,
  getResults,
  getError,
};
