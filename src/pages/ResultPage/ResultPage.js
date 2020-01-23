import React from 'react';
// import ResultProgressBar from '../../components/ResultProgressBar';
import Button from '../../components/Button';
import img from '../../assets/images/cats/2.png';
import styles from './ResultPage.module.css';

const ResultPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.main_header}>Результаты</h2>
        <p className={styles.test_title}>[ теория тестирования_ ]</p>

        <div className={styles.result_bar}>! For result_progress_bar !</div>
        <div className={styles.img}>
          <img src={img} width="180" height="200" alt="cat" />
        </div>
        <h2 className={styles.main_header}>Неплохой результат!</h2>
        <p className={styles.test_info}>Но тебе нужно доучить материалы.</p>
        <div className={styles.button}>
          <Button lable="Пройти еще раз" />
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
