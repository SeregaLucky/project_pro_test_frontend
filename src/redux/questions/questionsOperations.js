import questionActions from './questionsActions';
import api from '../../servises/api.js';
import questionsActions from './questionsActions';

const startTest = idTest => dispatch => {
  dispatch(questionsActions.postTestStart());

  api
    .postAllTests(idTest)
    .then(dataTest => dispatch(questionActions.postTestSuccess(dataTest)))
    .catch(error => dispatch(questionActions.postTestFailure(error)));
};

const sendResult = (result, examId) => dispatch => {
  //делаем put запрос на основе данных questions
  dispatch(questionActions.sendResultStart());
  api
    .sendResultRequest(result, examId)
    .then(res => dispatch(questionActions.sendResultSuccess(res)))
    .catch(err => dispatch(questionActions.sendResultFailure(err)));
};

const putResultsFinished = () => (dispatch, getState) => {
  const examIdFinished = getState().questions.examId;
  if (!examIdFinished) return;
  dispatch(questionActions.resultsFinishedStart());

  api
    .putResultsFinished(examIdFinished)
    .then(() => dispatch(questionActions.resultsFinishedSuccess()))
    .catch(error => dispatch(questionActions.resultsFinishedFailure(error)));
};

const getResultsById = () => (dispatch, getState) => {
  const examId = getState().questions.examId;
  dispatch(questionActions.resultsStart());

  api
    .getResultsById(examId)
    .then(data => dispatch(questionActions.resultsSuccess(data)))
    .catch(error => dispatch(questionActions.resultsFailure(error)));
};

export default {
  startTest,
  sendResult,
  putResultsFinished,
  getResultsById,
};
