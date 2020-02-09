import { toast } from 'react-toastify';
import userErrMessages from '../../components/AuthForm/errors/userErrMessages';
import api from '../../servises/api';
import authActions from './authActions';
import globalActions from '../global/globalActions';

const registerUser = (credentials, path, dispatch) => {
  dispatch(authActions.registerStart());

  api
    .register(path, credentials)
    .then(response => {
      api.setToken(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => {
      dispatch(authActions.registerFailure(error));
      toast.error(userErrMessages.EXISTING_USER, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  api
    .login(credentials)
    .then(res => {
      api.setToken(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch(err => {
      dispatch(authActions.loginFailure(err));
      toast.error(userErrMessages.WRONG_PASSWORD, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const { token } = getState().auth;

  if (!token) return;
  api.setToken(token);
  dispatch(authActions.getCurrentStart());

  api
    .getUser()
    .then(response => {
      dispatch(authActions.getCurrentSuccess(response.data.user));
    })
    .catch(err => dispatch(authActions.getCurrentFailure(err)));
};

const logoutUser = () => dispatch => {
  dispatch(authActions.logOutStart());

  api
    .logOut()
    .then(() => {
      api.unsetToken();
      dispatch(authActions.logOutSuccess());
      dispatch(globalActions.closeModal());
    })
    .catch(error => dispatch(authActions.logOutFailure(error.message)));
};

export default { registerUser, loginUser, getCurrentUser, logoutUser };
