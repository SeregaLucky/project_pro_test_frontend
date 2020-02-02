import { combineReducers } from 'redux';
import globalTypes from './globalTypes';

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const modalLogoutOpenReducer = (status = false, { type, payload }) => {
  switch (type) {
    case globalTypes.SET_MODAL_OPEN_TRUE:
      return true;
    default:
      return status;
  }
};

export default combineReducers({
  loading: loadingReducer,
  modalLogoutOpen: modalLogoutOpenReducer,
});
