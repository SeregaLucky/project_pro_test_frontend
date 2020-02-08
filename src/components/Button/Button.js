import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import T from 'prop-types';
import routes from '../../routes';
import questionsActions from '../../redux/questions/questionsActions';

import styles from './Button.module.css';

const Button = ({ lable, onReset }) => {
  return (
    <Link to={routes.MAIN_PAGE} className={styles.link} onClick={onReset}>
      {lable}
    </Link>
  );
};

Button.propTypes = {
  lable: T.string.isRequired,
  onReset: T.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(questionsActions.resetQuestions()),
});

export default connect(null, mapDispatchToProps)(Button);
