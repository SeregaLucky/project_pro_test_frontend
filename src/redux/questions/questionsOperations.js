import questionslActions from './questionsActions';
import { postAllTests } from '../../servises/api';

const startTest = idTest => dispatch => {
  // console.log(idTest);
  postAllTests(idTest)
    .then(dataTest => dispatch(questionslActions.postTestSuccess(dataTest)))
    .catch(error => dispatch(questionslActions.postTestFailure(error)));
};

export default { startTest };
