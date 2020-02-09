import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

/* SET && UNSET TOKEN */
const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

/* AUTHORIZATION */
const register = (path, credentials) => axios.post(path, credentials);
const login = credentials => axios.post('/auth/sign-in', credentials);
const getUser = () => axios.get('/users/current');
const logOut = () => axios.delete('/auth/sign-out');

/* TESTS */
const postAllTests = idTest => {
  return axios
    .post(`/exams/start?testId=${idTest}`)
    .then(response => response.data)
    .catch(error => error);
};

const sendResultRequest = (result, examId) => {
  return axios.put(`/exams/${examId}/questions`, result);
};

const putResultsFinished = examId => axios.put(`/exams/${examId}/finish`);

const getResultsById = examId => {
  return axios
    .get(`/exams/${examId}/result`)
    .then(response => response.data)
    .catch(error => error);
};

export default {
  setToken,
  unsetToken,

  register,
  login,
  getUser,
  logOut,

  postAllTests,
  sendResultRequest,
  putResultsFinished,
  getResultsById,
};
