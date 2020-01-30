import axios from 'axios';

axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const getResultsStatus = examId => {
  return axios
    .get(`/exams/?examId=${examId}`)
    .then(response => response.data)
    .catch(error => error);
};

const getResultsById = examId => {
  return axios
    .get(`/exams/?examId=${examId}/result`)
    .then(response => response.data)
    .catch(error => error);
};

export default { getResultsStatus, getResultsById };
