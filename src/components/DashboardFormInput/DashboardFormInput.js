import React from 'react';
import styles from './DashboardFormInput.module.css';

const answerQuestions = ['Тесты на уже протестированных участках приложения'];

const DashboardFormInput = props => {
  const itemsAnswersQuestions = answerQuestions.map(answer => {
    return (
      <label>
        <input
          className={styles.answer_item__input}
          type="radio"
          name="answer"
        />
        <p className={styles.answer_item__text}>{answer}</p>
      </label>
    );
  });

  return <li className={styles.answer_item}>{itemsAnswersQuestions}</li>;
};

export default DashboardFormInput;
