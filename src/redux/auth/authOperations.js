import axios from 'axios';
import { toast } from 'react-toastify';
import userErrMessages from '../../components/AuthForm/errors/userErrMessages';
import authActions from './authActions';

axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api/';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

const registerUser = (credentials, path, dispatch) => {
  dispatch(authActions.registerStart());
  axios
    .post(path, credentials)
    .then(response => {
      setToken(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(err => {
      dispatch(authActions.registerFailure(err));
      toast.error(userErrMessages.EXISTING_USER, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  axios
    .post('auth/sign-in', credentials)
    .then(res => {
      setToken(res.data.token);
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

  setToken(token);

  dispatch(authActions.getCurrentStart());

  axios
    .get('users/current')
    .then(response => {
      dispatch(authActions.getCurrentSuccess(response.data.user));
    })
    .catch(err => dispatch(authActions.getCurrentFailure(err)));
};

const logoutUser = () => dispatch => {
  axios
    .post('logout')
    .then(() => {
      unsetToken();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutFailure(error)));
};

export default { registerUser, logoutUser, loginUser, getCurrentUser };
