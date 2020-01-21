import React from 'react';
import styles from './DashboardPage.module.css';
import { ReactComponent as Arrow } from '../../assets/icons/svg/arrow.svg';

const DashboardPage = () => {
  return (
    <div className={styles.dashboardPageContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleContainer__title}>
          [ Теория тестирования_ ]
        </h1>
        <button className={styles.titleContainer__btnEnd} type="button">
          заглушка
        </button>
      </div>
      <div className={styles.DashboardForm}>заглушка</div>
      <div className={styles.btnContainer}>
        <button className={styles.btnContainer__back} type="button">
          <Arrow className={styles.btnContainer__arrow_back} />
          <span className={styles.btnContainer__backText}>
            Предыдущий вопрос
          </span>
        </button>
        <button className={styles.btnContainer__forward} type="button">
          <span className={styles.btnContainer__forwardText}>
            Следующий вопрос
          </span>
          <Arrow className={styles.btnContainer__arrow_forward} />
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
