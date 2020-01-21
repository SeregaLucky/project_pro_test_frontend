import React from 'react';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <section className={styles.authPage}>
      <div className={`${styles.container} ${styles.addFlex}`}>
        <div className={styles.blockInfo}>
          <h2 className={styles.title}>Pro Test</h2>

          <p className={styles.text}>
            <span className={styles.textSpan}>[</span> Мы поможем найти слабые
            места в знаниях, чтобы вы смогли их усилить. Покажем что актуально
            знать для <span className={styles.textSpan}>QA Engineer</span> и
            постараемся сделать процесс познания более разнообразным
            <span className={styles.textSpan}>_ ]</span>
          </p>
        </div>

        <div className={styles.divForm}></div>
      </div>
    </section>
  );
};

export default AuthPage;
