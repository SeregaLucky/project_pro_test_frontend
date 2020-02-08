import React from 'react';
import T from 'prop-types';
import styles from './DashboardFormInput.module.css';

const DashboardFormInput = ({ checked, choiceText, checkAnswer }) => {
  return (
    <label className={styles.labelAnswer}>
      <input
        className={styles.answer_item__input}
        type="radio"
        name="answer"
        checked={checked}
        onChange={checkAnswer}
      />
      <p className={styles.answer_item__text}>{choiceText}</p>
    </label>
  );
};

DashboardFormInput.defaultProps = {
  checked: false,
};

DashboardFormInput.propTypes = {
  checked: T.bool,
  choiceText: T.string.isRequired,
  checkAnswer: T.func.isRequired,
};

export default DashboardFormInput;
