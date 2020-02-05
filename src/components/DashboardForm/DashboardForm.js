import React from 'react';
import styles from './DashboardForm.module.css';
import DashboardFormInput from '../DashboardFormInput/DashboardFormInput';

const DashboardForm = ({ question, questionNumber, questionQuantity }) => {
  const itemsAnswersQuestions = question.choices.map(choice => {
    // ставим условия для того чтобы когда user вернется назад опции которые были выбраны стояли выбраными
    if (question.optionChoosed && choice.id === question.optionChoosed) {
      return (
        <DashboardFormInput
          key={choice.title}
          checked={true}
          choiceText={choice.title}
          questionId={question.id}
          choiceId={choice.id}
          questionNumber={questionNumber}
          questionQuantity={questionQuantity}
          choosed={question.optionChoosed}
        />
      );
    }
    return (
      <DashboardFormInput
        key={choice.title}
        checked={false}
        choiceText={choice.title}
        questionId={question.id}
        choiceId={choice.id}
        questionNumber={questionNumber}
        questionQuantity={questionQuantity}
        choosed={question.optionChoosed}
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

export default DashboardForm;
