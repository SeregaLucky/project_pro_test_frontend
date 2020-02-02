import { combineReducers } from 'redux';
import actionTypes from './authTypes';

const userReducer = (
  state = { name: null, email: null, id: '', createdAt: '' },
  { type, payload },
) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.GET_CURRENT_SUCCESS:
      return payload.user;

    case actionTypes.SET_USER_NAME_TO_STORE:
      return { ...state, name: payload.name };

    case actionTypes.LOGOUT_SUCCESS:
      return { name: null, email: null, id: '', createdAt: '' };

    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.SET_TOKEN_IN_STORE:
      return payload.token;

    case actionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isAuthReducer = (state = false, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.GET_CURRENT_SUCCESS:
    case actionTypes.SET_TOKEN_IN_STORE:
      return true;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_FAILURE:
    case actionTypes.LOGOUT_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.GET_CURRENT_FAILURE:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAuth: isAuthReducer,
  error: errorReducer,
});
