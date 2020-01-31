import authActionTypes from './authTypes';

const registerStart = () => ({
  type: authActionTypes.REGISTER_START,
});

const registerSuccess = ({ user, token }) => ({
  type: authActionTypes.REGISTER_SUCCESS,
  payload: { user, token },
});

const registerFailure = error => ({
  type: authActionTypes.REGISTER_FAILURE,
  payload: { error },
});

const loginStart = () => ({
  type: authActionTypes.LOGIN_START,
});

const loginSuccess = ({ user, token }) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: { user, token },
});

const loginFailure = error => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: { error },
});

const googleToken = userToken => ({
  type: authActionTypes.SET_TOKEN_IN_STORE,
  payload: { token: userToken },
});

const getCurrentStart = () => ({
  type: authActionTypes.GET_CURRENT_START,
});

const getCurrentSuccess = user => ({
  type: authActionTypes.GET_CURRENT_SUCCESS,
  payload: { user },
});

const getCurrentFailure = error => ({
  type: authActionTypes.GET_CURRENT_FAILURE,
  payload: { error },
});

const logOutStart = () => ({
  type: authActionTypes.LOGOUT_START,
});

const logOutSuccess = () => ({
  type: authActionTypes.LOGOUT_SUCCESS,
});

const logOutFailure = error => ({
  type: authActionTypes.LOGOUT_FAILURE,
  payload: { error },
});

export default {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  googleToken,
  getCurrentStart,
  getCurrentSuccess,
  getCurrentFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
};
