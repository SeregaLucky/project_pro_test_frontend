import axios from 'axios';

axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzBhMzcxYTU2NGFkNjQ2OTQzYjY0YyIsImlhdCI6MTU4MDI0NTg3M30.ppdY2GwGmAU4N7q2noVQrZywAwkl8AJPl0R00pV9LVI`;
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

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

export default { getResultsStatus, getResultsById };
