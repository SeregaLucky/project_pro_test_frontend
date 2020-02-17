import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import T from 'prop-types';
import styles from './DashboardPageContainer.module.css';
import questionsSelectors from '../../redux/questions/questionsSelectors';
import globalSelectors from '../../redux/global/globalSelectors';
import questionsActions from '../../redux/questions/questionsActions';
import questionsOperations from '../../redux/questions/questionsOperations';
import DashboardPage from './DashboardPage';
import ErrorInfo from '../../components/ErrorInfo/ErrorInfo';

const DashboardPageContainer = ({
  questions,
  isResultSended,
  sendResult,
  check,
  examId,
  isLoading,
  error,
}) => {
  const [isDisabledBackBtn, setIsDisabledBackBtn] = useState(true);
  const [isDisabledForwardBtn, setIsDisabledForwardBtn] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [lastCheck, setLastCheck] = useState(false);

  const increaseQuestionNumber = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const decreaseQuestionNumber = () => {
    setQuestionNumber(questionNumber - 1);
  };

  const isDisableButtons = () => {
    // если questions = null чтобы не было ошибки
    if (!questions) {
      return;
    }

    // forwardBtn - disable
    if (!questions[questionNumber - 1].optionChoosed) {
      setIsDisabledForwardBtn(true);
    }

    if (questions[questionNumber - 1].optionChoosed) {
      setIsDisabledForwardBtn(false);
    }

    // backBtn - disable
    if (questionNumber === 1) {
      setIsDisabledBackBtn(true);
    }

    if (questionNumber > 1) {
      setIsDisabledBackBtn(false);
    }
  };

  const checkAnswer = (
    examQuestionId,
    choiceId,
    questionNumber,
    questionQuantity,
    choosed,
  ) => {
    // когда последний вопрос, тогда не увеличиваем номер вопроса (increasePageNumber)
    if (questionNumber === questionQuantity) {
      check(examQuestionId, choiceId);
      setLastCheck(true);
      return;
    }

    // если юзер вернулся чтобы изменить ответ. При изменении не увеличиваем номер вопроса (increasePageNumber)
    if (choosed) {
      check(examQuestionId, choiceId);
      return;
    }

    // делаем задержку на 200 мс, чтобы пользователь видел куда нажал
    setTimeout(() => increaseQuestionNumber(), 200);
    check(examQuestionId, choiceId);
    return;
  };

  const sendResults = () => {
    if (!questions) {
      return;
    }

    const result = questions.map(question => {
      return {
        examQuestionId: question.id,
        choiceId: question.optionChoosed,
      };
    });

    // форма обьекта как требует back-end
    const answersShape = { answers: result };
    sendResult(answersShape, examId);
  };

  useEffect(isDisableButtons, [questionNumber]);
  useEffect(sendResults, [lastCheck]);

  return (
    <>
      {questions && (
        <>
          {/* если приходит ответ на put запрос со статусом 204 ==>redirect */}
          {isResultSended && <Redirect to="/result" />}
          <DashboardPage
            increaseQuestionNumber={increaseQuestionNumber}
            decreaseQuestionNumber={decreaseQuestionNumber}
            checkAnswer={checkAnswer}
            questionNumber={questionNumber}
            questions={questions}
            isDisabledBackBtn={isDisabledBackBtn}
            isDisabledForwardBtn={isDisabledForwardBtn}
          />
        </>
      )}

      {!error && !questions && !isLoading && (
        <div className={styles.noQuestions}>
          <h3 className={styles.smallTitle}>Выбирите тест</h3>
        </div>
      )}

      {isLoading && <div className={styles.noQuestions}></div>}

      {error && <ErrorInfo />}
    </>
  );
};

DashboardPageContainer.propTypes = {
  isResultSended: T.bool.isRequired,
  sendResult: T.func.isRequired,
  check: T.func.isRequired,
  questions: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      examId: T.string.isRequired,
      question: T.string.isRequired,
      choices: T.arrayOf(
        T.shape({
          id: T.number.isRequired,
          title: T.string.isRequired,
        }).isRequired,
      ),
    }).isRequired,
  ),
};

const mapStateToProps = state => {
  return {
    examId: questionsSelectors.getExamId(state),
    questions: questionsSelectors.getQuestions(state),
    error: questionsSelectors.getError(state),
    isResultSended: questionsSelectors.getIsResultSended(state),
    isLoading: globalSelectors.getIsLoading(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    check: (examQuestionId, choiceId) =>
      dispatch(questionsActions.checkAnswer(examQuestionId, choiceId)),
    sendResult: (result, examId) =>
      dispatch(questionsOperations.sendResult(result, examId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPageContainer);
