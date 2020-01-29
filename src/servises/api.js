import axios from 'axios';

axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const getResultsStatus = examId => {
  axios
    .get(`/exams/?examId=5e2ee3be933b4f3b74d81d92`)
    .then()
    .catch(error => error);
};

const getResultsById = examId => {
  axios
    .get(`/exams/?examId=5e2ee3be933b4f3b74d81d92/result`)
    .then()
    .catch(error => error);
};

export default { getResultsStatus, getResultsById };
