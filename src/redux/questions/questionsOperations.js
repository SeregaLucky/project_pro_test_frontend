import resultsActions from './questionsActions';
import api from '../../servises/api.js';
import questionslActions from './questionsActions';
import { postAllTests } from '../../servises/api';

const getResultsStatus = () => dispatch => {
  dispatch(resultsActions.resultsStart());
  api
    .getResultsStatus()
    .then(data => dispatch(resultsActions.resultsSuccess(data)))
    .catch(error => dispatch(resultsActions.resultsFailure(error)));
};

const getResultsById = examId => dispatch => {
  dispatch(resultsActions.resultsStart());
  api
    .getResultsById(examId)
    .then(data => dispatch(resultsActions.resultsSuccess(data)))
    .catch(error => dispatch(resultsActions.resultsFailure(error)));
};

const startTest = idTest => dispatch => {
  postAllTests(idTest)
    .then(dataTest => dispatch(questionslActions.postTestSuccess(dataTest)))
    .catch(error => dispatch(questionslActions.postTestFailure(error)));
};

export default {
  getResultsStatus,
  getResultsById,
  startTest,
};
