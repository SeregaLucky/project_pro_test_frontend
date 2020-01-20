import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/svg/arrow.svg';
import styles from './MainTestButton.module.css';

const MainTestButton = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            to={{ pathname: `${routes.DASHBOARD_PAGE}` }}
            className={styles.button}
          >
            Теория тестирования
            <img
              src={arrow}
              className={styles.arrow}
              width="35px"
              height="30px"
              alt="arrow"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainTestButton;
