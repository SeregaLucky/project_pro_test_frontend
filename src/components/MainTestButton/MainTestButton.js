import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { ReactComponent as Arrow } from '../../assets/icons/svg/arrow.svg';
import questionsActions from '../../redux/questions/questionsActions';
import questionsOperations from '../../redux/questions/questionsOperations';
import styles from './MainTestButton.module.css';

const MainTestButton = ({ idTest, text, bg, resetQuestions, giveTest }) => {
  const handleClick = () => {
    resetQuestions();
    giveTest(idTest);
  };

  return (
    <li className={styles.listButton}>
      <Link
        onClick={handleClick}
        to={routes.DASHBOARD_PAGE}
        className={bg === 'orange' ? styles.buttonOrange : styles.buttonBlue}
      >
        {text}
        <Arrow className={styles.arrow} width="25px" alt="arrow" />
      </Link>
    </li>
  );
};

MainTestButton.propTypes = {
  text: T.string.isRequired,
  bg: T.string.isRequired,
  idTest: T.string.isRequired,
  giveTest: T.func.isRequired,
  resetQuestions: T.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  giveTest: idTest => dispatch(questionsOperations.startTest(idTest)),
  resetQuestions: () => dispatch(questionsActions.resetQuestions()),
});

export default connect(null, mapDispatchToProps)(MainTestButton);
