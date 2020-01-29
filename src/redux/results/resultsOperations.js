import resultsActions from './resultsActions';
import api from '../../servises/api.js';

const getResultsStatus = () => dispatch => {
  dispatch(resultsActions.resultsStart());
  api
    .getResultsStatus()
    .then(response => dispatch(resultsActions.resultsSuccess(response.data)))
    .catch(error => dispatch(resultsActions.resultsFailure(error)));
};

const getResultsById = examId => dispatch => {
  dispatch(resultsActions.resultsStart());
  api
    .getResultsById(examId)
    .then(response => dispatch(resultsActions.resultsSuccess(response.data)))
    .catch(error => dispatch(resultsActions.resultsFailure(error)));
};

export default {
  getResultsStatus,
  getResultsById,
};
