import React from 'react';
import MainTestButton from '../../components/MainTestButton/MainTestButton';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <section className={styles.mainPage}>
      <div className={styles.container}>
        <h2 className={styles.mainPage_quote}>
          "Регресионное тестирование. Что это? Если система комплириется, то это
          хорошо, если загружается, то это просто здорово!"
        </h2>
        <h3 className={styles.mainPage_author}>Линус Торвальдс</h3>
        <p className={styles.mainPage_descr}>
          Финский программист, хакер, 1969 г.
        </p>
        <div className={`${styles.container} ${styles.mainPage_buttons}`}>
          <MainTestButton />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
