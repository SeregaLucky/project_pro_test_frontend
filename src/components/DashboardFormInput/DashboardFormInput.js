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
  choosed,
}) => {
  return (
    <label>
      <input
        className={styles.answer_item__input}
        type="radio"
        name="answer"
        checked={checked}
        onChange={() =>
          checkAnswer(
            questionId,
            choiceId,
            questionNumber,
            questionQuantity,
            choosed,
          )
        }
      />
      <p className={styles.answer_item__text}>{choiceText}</p>
    </label>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    checkAnswer: (
      examQuestionId,
      choiceId,
      questionNumber,
      questionQuantity,
      choosed,
    ) =>
      dispatch(
        questionsOperations.checkAnswer(
          examQuestionId,
          choiceId,
          questionNumber,
          questionQuantity,
          choosed,
        ),
      ),
  };
};

export default connect(null, mapDispatchToProps)(DashboardFormInput);
