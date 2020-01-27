import resultsActions from './resultsActions';
import api from '../../servises/api.js';

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

export default {
  getResultsStatus,
  getResultsById,
};
