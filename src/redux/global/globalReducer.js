import { combineReducers } from 'redux';
import globalTypes from './globalTypes';
import questionsTypes from '../questions/questionsTypes';
import authTypes from '../../redux/auth/authTypes';

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case questionsTypes.RESULTS_START:
    case questionsTypes.RESULTS_FINISHED_START:
    case authTypes.LOGOUT_START:
      return true;
    case questionsTypes.RESULTS_SUCCESS:
    case questionsTypes.RESULTS_FAILURE:
    case questionsTypes.RESULTS_FINISHED_SUCCESS:
    case questionsTypes.RESULTS_FINISHED_FAILURE:
    case authTypes.LOGOUT_SUCCESS:
    case authTypes.LOGOUT_FAILURE:
      return false;
    default:
      return state;
  }
};

const modalLogoutOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    case globalTypes.SET_MODAL_OPEN_TRUE:
      return true;
    case globalTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  loading: loadingReducer,
  modalLogoutOpen: modalLogoutOpenReducer,
});
