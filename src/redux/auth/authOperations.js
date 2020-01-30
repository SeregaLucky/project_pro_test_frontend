import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api/';
// const BASE_URL = 'https://lpj-tasker.herokuapp.com/users/';

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
    .catch(error => dispatch(authActions.registerFailure(error)));
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  axios
    .post('auth/sign-in', credentials)
    .then(res => {
      setToken(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch(err => dispatch(authActions.loginFailure(err)));
};

//----------------
const getCurrentUser = () => (dispatch, getState) => {
  const { token } = getState().auth;

  if (!token) return;

  setToken(token);

  dispatch(authActions.getCurrentStart());

  axios
    .get('users/current')
    .then(response => {
      dispatch(authActions.getCurrentSuccess(response.data));
    })
    .catch(err => dispatch(authActions.getCurrentFailure(err)));
};

const logout = () => (dispatch, getState) => {
  axios
    .post('logout')
    .then(() => {
      unsetToken();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutFailure(error)));
};

export default { registerUser, logout, loginUser, getCurrentUser };
