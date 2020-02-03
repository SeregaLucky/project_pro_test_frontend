import {
  setToken,
  login,
  getUser,
  register,
  logOut,
  unsetToken,
} from '../../servises/api';
import authActions from './authActions';
import globalActions from '../global/globalActions';

const registerUser = (credentials, path, dispatch) => {
  dispatch(authActions.registerStart());

  register(path, credentials)
    .then(response => {
      setToken(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => {
      dispatch(authActions.registerFailure(error));
    });
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  login(credentials)
    .then(res => {
      setToken(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch(err => {
      dispatch(authActions.loginFailure(err));
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const { token } = getState().auth;
  if (!token) return;
  setToken(token);
  dispatch(authActions.getCurrentStart());
  getUser()
    .then(response => {
      dispatch(authActions.getCurrentSuccess(response.data.user));
    })
    .catch(err => dispatch(authActions.getCurrentFailure(err)));
};

const logoutUser = () => dispatch => {
  dispatch(authActions.logOutStart());

  logOut()
    .then(() => {
      unsetToken();
      dispatch(authActions.logOutSuccess());
      dispatch(globalActions.closeModal());
    })
    .catch(err => dispatch(authActions.loginFailure(err.message)));
};

export default { registerUser, loginUser, getCurrentUser, logoutUser };
