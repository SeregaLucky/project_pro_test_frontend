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

// const googleLoginStart = () => ({
//   type: authActionTypes.REGISTER_START,
// });

// const googleLoginSuccess = ({ user, token }) => ({
//   type: authActionTypes.REGISTER_SUCCESS,
//   payload: { user, token },
// });

// const googleLoginFailure = error => ({
//   type: authActionTypes.REGISTER_FAILURE,
//   payload: { error },
// });

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

const loginStart = () => ({
  type: authActionTypes.LOGIN_START,
}); // При такой записи произойдет return обьекта в круглых скобках

const loginSuccess = ({ user, token }) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: { user, token },
});

const loginFailure = error => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: { error },
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

export default {
  registerStart,
  registerSuccess,
  registerFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  getCurrentStart,
  getCurrentSuccess,
  getCurrentFailure,
};
