import { combineReducers } from 'redux';
import globalTypes from './globalTypes';

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
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
