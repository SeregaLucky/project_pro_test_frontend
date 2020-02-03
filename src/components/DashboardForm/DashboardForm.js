import React from 'react';
import styles from './DashboardForm.module.css';
import DashboardFormInput from '../DashboardFormInput/DashboardFormInput';

const DashboardForm = ({ question, questionNumber, questionQuantity }) => {
  const itemsAnswersQuestions = question.choices.map(choice => {
    // ставим условия для того чтобы когда user вернется назад опции которые были выбраны стояли выбраными
    if (question.optionChoosed && choice.id === question.optionChoosed) {
      return (
        <DashboardFormInput
          key={choice.id}
          checked={true}
          choiceText={choice.title}
          questionId={question.id}
          choiceId={choice.id}
          questionNumber={questionNumber}
          questionQuantity={questionQuantity}
        />
      );
    }
    return (
      <DashboardFormInput
        key={choice.id}
        checked={false}
        choiceText={choice.title}
        questionId={question.id}
        choiceId={choice.id}
        questionNumber={questionNumber}
        questionQuantity={questionQuantity}
      />
    );
  });
  return (
    <div className={styles.dashboardform}>
      {/* <h2>DashboardForm</h2> */}
      <p className={styles.dashboardform__counter}>
        {' '}
        вопрос <span>{questionNumber}</span> / {questionQuantity} {}{' '}
      </p>
      <h2 className={styles.dashboardform__question}>{question.question}</h2>
      <i className={styles.dashboardform__hr}></i>
      <ul className={styles.dashboardform__answers}>{itemsAnswersQuestions}</ul>
    </div>
  );
};

export default DashboardForm;
