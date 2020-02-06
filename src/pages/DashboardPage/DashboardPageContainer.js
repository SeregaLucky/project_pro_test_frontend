import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import questionsSelectors from '../../redux/questions/questionsSelectors';
import questionsActions from '../../redux/questions/questionsActions';
import questionsOperations from '../../redux/questions/questionsOperations';
import DashboardPage from './DashboardPage';

class DashboardPageContainer extends Component {
  state = {
    isDisabledBackBtn: true,
    isDisabledForwardBtn: true,
    result: null,
  };

  getResultFromState = questions => {
    const result = questions.map(question => {
      return {
        examQuestionId: question.id,
        choiceId: question.optionChoosed,
      };
    });

    this.setState({
      result: {
        answers: result,
      },
    });
    console.log();
  };

  componentDidUpdate() {
    const {
      questionNumber,
      questions,
      sendResult,
      isResultSended,
    } = this.props;
    const { isDisabledBackBtn, isDisabledForwardBtn, result } = this.state;

    // если последний элемент выбран => со стейта забираем значения
    if (questions[questions.length - 1].optionChoosed && !result) {
      this.getResultFromState(questions);
    }
    // делаем put запрос
    if (result && !isResultSended) {
      sendResult(result, questions[0].examId);
    }

    // Disable по кнопкам двойная проверка чтобы не было зацикливания
    if (!questions[questionNumber - 1].optionChoosed && !isDisabledForwardBtn) {
      this.setState({
        isDisabledForwardBtn: true,
      });
    }

    if (questions[questionNumber - 1].optionChoosed && isDisabledForwardBtn) {
      this.setState({
        isDisabledForwardBtn: false,
      });
    }

    if (questionNumber > 1 && isDisabledBackBtn) {
      this.setState({
        isDisabledBackBtn: false,
      });
    }

    if (questionNumber === 1 && !isDisabledBackBtn) {
      this.setState({
        isDisabledBackBtn: true,
      });
    }
  }

  render() {
    const {
      increaseQuestionNumber,
      decreaseQuestionNumber,
      questions,
      questionNumber,
      isResultSended,
    } = this.props;
    const { isDisabledBackBtn, isDisabledForwardBtn } = this.state;

    return (
      // если приходит ответ на put запрос со статусом 204 ==>redirect
      questions && (
        <>
          {isResultSended && isResultSended.status === 204 && (
            <Redirect to="/result" />
          )}
          <DashboardPage
            increaseQuestionNumber={increaseQuestionNumber}
            decreaseQuestionNumber={decreaseQuestionNumber}
            questionNumber={questionNumber}
            questions={questions}
            isDisabledBackBtn={isDisabledBackBtn}
            isDisabledForwardBtn={isDisabledForwardBtn}
          />
        </>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    questionNumber: questionsSelectors.getQuestionNumber(state),
    questions: questionsSelectors.getQuestions(state),
    err: questionsSelectors.getErr(state),
    isResultSended: questionsSelectors.getIsResultSended(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseQuestionNumber: () =>
      dispatch(questionsActions.increaseQuestionNumber()),
    decreaseQuestionNumber: () =>
      dispatch(questionsActions.decreaseQuestionNumber()),
    sendResult: (result, examId) =>
      dispatch(questionsOperations.sendResult(result, examId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPageContainer);
