import React from 'react';
import img from '../../assets/images/cats/2.png';
import styles from './ResultPage.module.css';

const ResultPage = () => {
  return (
    <>
      <div className={styles.section}>
        <h2 className={styles.main_header}>Результаты</h2>
        <h3 className={styles.test_title}>[ теория тестирования_ ]</h3>

        <div className={styles.result_bar}>! For result_progress_bar !</div>
        <div className={styles.img}>
          <img src={img} width="180" height="200" alt="cat" />
        </div>
        <h2 className={styles.main_header}>Неплохой результат!</h2>
        <h3 className={styles.test_info}>Но тебе нужно доучить материалы.</h3>
        <button className={styles.button} type="button">
          Пройти еще раз
        </button>
      </div>
    </>
  );
};

export default ResultPage;
