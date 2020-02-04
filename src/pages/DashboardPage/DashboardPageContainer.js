import { connect } from 'react-redux';
import questionsSelectors from '../../redux/questions/questionsSelectors';
import questionsActions from '../../redux/questions/questionsActions';
import questionsOperations from '../../redux/questions/questionsOperations';
import DashboardPage from './DashboardPage';

const mapStateToProps = state => {
  return {
    questionNumber: questionsSelectors.getQuestionNumber(state),
    questions: questionsSelectors.getQuestions(state),
    result: questionsSelectors.getResult(state),
    err: questionsSelectors.getErr(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseQuestionNumber: () =>
      dispatch(questionsActions.increaseQuestionNumber()),
    decreaseQuestionNumber: () =>
      dispatch(questionsActions.decreaseQuestionNumber()),
    addToResult: questions =>
      dispatch(questionsOperations.addToResult(questions)),
    sendResult: (result, examId) =>
      dispatch(questionsOperations.sendResult(result, examId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
