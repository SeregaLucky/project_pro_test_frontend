import React from 'react';
import styles from './DashboardFormInput.module.css';

const DashboardFormInput = ({ answers }) => {
  return (
    <>
      {answers.map(answer => (
        <li className={styles.answer_item}>
          <label>
            <input
              className={styles.answer_item__input}
              type="radio"
              name="answer"
            />
            <p className={styles.answer_item__text}>{answer}</p>
          </label>
        </li>
      ))}
    </>
  );
};

export default DashboardFormInput;
