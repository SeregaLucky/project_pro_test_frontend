import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { ReactComponent as Arrow } from '../../assets/icons/svg/arrow.svg';
import questionsOperations from '../../redux/questions/questionsOperations';
import styles from './MainTestButton.module.css';

class MainTestButton extends Component {
  handleClick = () => {
    const { giveTest, idTest } = this.props;
    giveTest(idTest);
  };

  render() {
    const { text, bg } = this.props;
    return (
      <li className={styles.listButton}>
        <Link
          onClick={this.handleClick}
          to={routes.DASHBOARD_PAGE}
          className={
            bg === 'buttonOrange' ? styles.buttonOrange : styles.buttonBlue
          }
        >
          {text}
          <Arrow className={styles.arrow} width="25px" alt="arrow" />
        </Link>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  giveTest: idTest => dispatch(questionsOperations.startTest(idTest)),
});

export default connect(null, mapDispatchToProps)(MainTestButton);
