import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/icons/svg/arrow.svg';
import styles from './MainTestButton.module.css';

const MainTestButton = () => {
  return (
    <li>
      <Link to={routes.DASHBOARD_PAGE} className={styles.button}>
        Теория тестирования
        <Arrow className={styles.arrow} width="25px" alt="arrow" />
      </Link>
    </li>
  );
};

export default MainTestButton;
