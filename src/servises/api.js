import axios from 'axios';

axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const unsetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

const getResultsStatus = examId => {
  return axios
    .get(`/exams/${examId}`)
    .then(response => response.data)
    .catch(error => error);
};

const getResultsById = examId => {
  return axios
    .get(`/exams/${examId}/result`)
    .then(response => {
      return response.data;
    })
    .catch(error => error);
};

export const register = (path, credentials) => axios.post(path, credentials);
export const login = credentials => axios.post('/auth/sign-in', credentials);
export const getUser = () => axios.get('/users/current');

export const postAllTests = idTest => {
  console.log(idTest);
  return axios
    .post(`/exams/start?testId=${idTest}`)
    .then(response => response.data)
    .catch(error => error);
};

export default { getResultsStatus, getResultsById };
