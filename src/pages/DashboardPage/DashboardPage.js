import React from 'react';
import T from 'prop-types';
import { ReactComponent as Arrow } from '../../assets/icons/svg/arrow.svg';
import Button from '../../components/Button/Button';
import DashboardForm from '../../components/DashboardForm/DashboardForm';
import styles from './DashboardPage.module.css';

const DashboardPage = ({
  questionNumber,
  questions,
  isDisabledBackBtn,
  isDisabledForwardBtn,
  increaseQuestionNumber,
  decreaseQuestionNumber,
  checkAnswer,
}) => {
  return (
    <section className={styles.dashboardPage}>
      <div className={styles.dashboardPageContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleContainer__title}>
            [ Теория тестирования_ ]
          </h2>
          <Button lable={'Завершить тест'} />
        </div>
        <DashboardForm
          question={questions[questionNumber - 1]}
          questionNumber={questionNumber}
          questionQuantity={questions.length}
          checkAnswer={checkAnswer}
        />
        <div className={styles.btnContainer}>
          <button
            className={styles.btnContainer__back}
            type="button"
            onClick={decreaseQuestionNumber}
            disabled={isDisabledBackBtn}
          >
            <Arrow className={styles.btnContainer__arrow_back} />
            <span className={styles.btnContainer__backText}>
              Предыдущий вопрос
            </span>
          </button>
          <button
            className={styles.btnContainer__forward}
            type="button"
            onClick={increaseQuestionNumber}
            disabled={isDisabledForwardBtn}
          >
            <span className={styles.btnContainer__forwardText}>
              Следующий вопрос
            </span>
            <Arrow className={styles.btnContainer__arrow_forward} />
          </button>
        </div>
      </div>
    </section>
  );
};

DashboardPage.propTypes = {
  questions: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      question: T.string.isRequired,
      choices: T.arrayOf(
        T.shape({
          id: T.number.isRequired,
          title: T.string.isRequired,
        }).isRequired,
      ),
    }).isRequired,
  ),
  checkAnswer: T.func.isRequired,
  increaseQuestionNumber: T.func.isRequired,
  decreaseQuestionNumber: T.func.isRequired,
  isDisabledBackBtn: T.bool.isRequired,
  isDisabledForwardBtn: T.bool.isRequired,
  questionNumber: T.number.isRequired,
};

export default DashboardPage;
