import React from 'react';
import questionsOperations from '../../redux/questions/questionsOperations';
import { connect } from 'react-redux';
import styles from './DashboardFormInput.module.css';

const DashboardFormInput = ({
  checked,
  choiceText,
  checkAnswer,
  questionId,
  choiceId,
  questionNumber,
  questionQuantity,
}) => {
  return (
    <label>
      <input
        className={styles.answer_item__input}
        type="radio"
        name="answer"
        checked={checked}
        onChange={() =>
          checkAnswer(questionId, choiceId, questionNumber, questionQuantity)
        }
      />
      <p className={styles.answer_item__text}>{choiceText}</p>
    </label>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    checkAnswer: (examQuestionId, choiceId, questionNumber, questions) =>
      dispatch(
        questionsOperations.checkAnswer(
          examQuestionId,
          choiceId,
          questionNumber,
          questions,
        ),
      ),
  };
};

export default connect(null, mapDispatchToProps)(DashboardFormInput);
