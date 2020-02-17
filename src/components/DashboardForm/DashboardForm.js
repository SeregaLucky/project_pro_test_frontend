import React from 'react';
import T from 'prop-types';
import styles from './DashboardForm.module.css';
import DashboardFormInput from '../DashboardFormInput/DashboardFormInput';

const DashboardForm = ({
  question,
  questionNumber,
  questionQuantity,
  checkAnswer,
}) => {
  const itemsAnswersQuestions = question.choices.map((choice, idx) => {
    // ставим условия для того чтобы когда user вернется назад опции которые были выбраны стояли выбраными
    if (question.optionChoosed && choice.id === question.optionChoosed) {
      return (
        <DashboardFormInput
          key={idx}
          checked={true}
          choiceText={choice.title}
          checkAnswer={() =>
            checkAnswer(
              question.id,
              choice.id,
              questionNumber,
              questionQuantity,
              question.optionChoosed,
            )
          }
        />
      );
    }
    return (
      <DashboardFormInput
        key={idx}
        choiceText={choice.title}
        checkAnswer={() =>
          checkAnswer(
            question.id,
            choice.id,
            questionNumber,
            questionQuantity,
            question.optionChoosed,
          )
        }
      />
    );
  });

  return (
    <div className={styles.dashboardform}>
      <p className={styles.dashboardform__counter}>
        Вопрос <span> {questionNumber}</span> / {questionQuantity}
      </p>
      <h2 className={styles.dashboardform__question}>{question.question}</h2>

      <form className={styles.dashboardform__answers}>
        {itemsAnswersQuestions}
      </form>
    </div>
  );
};

DashboardForm.propTypes = {
  question: T.shape({
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
  questionNumber: T.number.isRequired,
  questionQuantity: T.number.isRequired,
  checkAnswer: T.func.isRequired,
};

export default DashboardForm;
