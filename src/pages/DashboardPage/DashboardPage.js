import React from 'react';
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
}) => {
  return (
    <div className={styles.dashboardPage}>
      <section className={styles.dashboardPageContainer}>
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
      </section>
    </div>
  );
};

export default DashboardPage;
