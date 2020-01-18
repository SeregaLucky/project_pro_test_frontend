import { combineReducers } from 'redux';

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const modalLogoutOpenReducer = (status = false, { type, payload }) => {
  switch (type) {
    default:
      return status;
  }
};

export default combineReducers({
  loading: loadingReducer,
  modalLogoutOpen: modalLogoutOpenReducer,
});
