import authActionTypes from './authTypes';

/* REGISTER */
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

/* LOGIN */
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

/* GOOGLE TOKEN */
const googleToken = userToken => ({
  type: authActionTypes.SET_TOKEN_IN_STORE,
  payload: { token: userToken },
});

/* GET CURRENT */
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

/* LOG OUT */
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
