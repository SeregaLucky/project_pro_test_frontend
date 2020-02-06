import questionActions from './questionsActions';
import api from '../../servises/api.js';
import { postAllTests } from '../../servises/api';

const checkAnswer = (
  examQuestionId,
  choiceId,
  questionNumber,
  questionQuantity,
  choosed,
) => dispatch => {
  //если это последний элемент НЕ используем increaseQuestionNumber чтобы не было ошибки
  if (questionNumber === questionQuantity) {
    dispatch(questionActions.checkAnswer(examQuestionId, choiceId));
    return;
  }

  if (choosed) {
    dispatch(questionActions.checkAnswer(examQuestionId, choiceId));
    return;
  }

  dispatch(questionActions.checkAnswer(examQuestionId, choiceId));
  dispatch(questionActions.increaseQuestionNumber());
  return;
};

const sendResult = (result, examId) => dispatch => {
  //делаем put запрос на основе данных questions
  
  dispatch(questionActions.sendResultStart());
  api
    .sendResultRequest(result, examId)
    .then(res => dispatch(questionActions.sendResultSuccess(res)))
    .catch(err => dispatch(questionActions.sendResultFailure(err)));
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
  postAllTests(idTest)
    .then(dataTest => dispatch(questionActions.postTestSuccess(dataTest)))
    .catch(error => dispatch(questionActions.postTestFailure(error)));
};

export default {
  checkAnswer,
  sendResult,
  getResultsStatus,
  getResultsById,
  startTest,
};
