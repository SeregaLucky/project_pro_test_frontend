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

// const registerUser = credentials => dispatch => {
//   dispatch(authActions.registerStart());
//   axios
//     .post('signup', credentials)
//     .then(response => {
//       setToken(response.data.token);
//       dispatch(authActions.registerSuccess(response.data));
//     })
//     .catch(error => dispatch(authActions.registerFailure(error)));

//   // Axios под капотом уже все парсит, поэтому res => res.json() делать не нужно. Сразу пишем response
// };

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

const googleLogIn = () => dispatch => {
  //just now - check the GET method. after successful response add authActions
  axios
    .get('auth/google')
    .then(res => console.log('res: ', res))
    .catch(err => console.log('err', err));
};

//----------------
const getCurrentUser = () => (dispatch, getState) => {
  const state = getState();
  console.log(state);
  const { token } = state.auth;

  if (!token) return;
  setToken(token);
  dispatch(authActions.getCurrentStart());

  axios
    .get('current')
    .then(response => {
      console.log(response);
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

export default { registerUser, logout, loginUser, getCurrentUser, googleLogIn };
