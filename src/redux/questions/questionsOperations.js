import questionActions from './questionsActions';
import api from '../../servises/api.js';

// const checkAnswer = (
//   examQuestionId,
//   choiceId,
//   questionNumber,
//   questionQuantity,
//   choosed,
// ) => {
//   if (questionNumber === questionQuantity) {
//     questionActions.checkAnswer(examQuestionId, choiceId);
//     return;
//   }

//   if (choosed) {
//     questionActions.checkAnswer(examQuestionId, choiceId);
//     return;
//   }

//   questionActions.checkAnswer(examQuestionId, choiceId);
//   questionActions.increaseQuestionNumber();
//   return;
// };

const sendResult = (result, examId) => dispatch => {
  //делаем put запрос на основе данных questions

  dispatch(questionActions.sendResultStart());
  api
    .sendResultRequest(result, examId)
    .then(res => dispatch(questionActions.sendResultSuccess(res)))
    .catch(err => dispatch(questionActions.sendResultFailure(err)));
};

const putResultsFinished = () => (dispatch, getState) => {
  const examIdFinished = getState().questions.questions.idTestBlock;
  dispatch(questionActions.resultsFinishedStart());
  api
    .putResultsFinished(examIdFinished)
    .then(() => dispatch(questionActions.resultsFinishedSuccess()))
    .catch(error => dispatch(questionActions.resultsFinishedFailure(error)));
};

const getResultsStatus = () => dispatch => {
  dispatch(questionActions.resultsStart());
  api
    .getResultsStatus()
    .then(data => dispatch(questionActions.resultsSuccess(data)))
    .catch(error => dispatch(questionActions.resultsFailure(error)));
};

const getResultsById = () => (dispatch, getState) => {
  const examId = getState().questions.questions.idTestBlock;
  dispatch(questionActions.resultsStart());
  api
    .getResultsById(examId)
    .then(data => dispatch(questionActions.resultsSuccess(data)))
    .catch(error => dispatch(questionActions.resultsFailure(error)));
};

const startTest = idTest => dispatch => {
  api
    .postAllTests(idTest)
    .then(dataTest => dispatch(questionActions.postTestSuccess(dataTest)))
    .catch(error => dispatch(questionActions.postTestFailure(error)));
};

export default {
  sendResult,
  putResultsFinished,
  getResultsStatus,
  getResultsById,
  startTest,
};
