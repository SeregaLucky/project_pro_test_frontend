import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = 'https://pro-test.goit.co.ua/api';
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
const postAllTests = async idTest => {
  const response = await axios.post(`/exams/start?testId=${idTest}`);
  return response.data;
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
