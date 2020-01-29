import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.baseURL =
  'http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api';

axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzBhMzcxYTU2NGFkNjQ2OTQzYjY0YyIsImlhdCI6MTU4MDI0NTg3M30.ppdY2GwGmAU4N7q2noVQrZywAwkl8AJPl0R00pV9LVI`;

export const postAllTests = idTest => {
  console.log(idTest);
  return axios
    .post(`/exams/start?testId=${idTest}`)
    .then(response => response.data)
    .catch(error => error);
};
