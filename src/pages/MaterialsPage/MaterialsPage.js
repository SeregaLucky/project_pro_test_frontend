import React from 'react';
import styles from './MaterialsPage.module.css';

const MaterialsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Полезная литература</h2>
        <ol className={styles.list}>
          <li className={styles.listItem}>1. Тестирование dot.com Савин.</li>
          <li className={styles.listItem}>
            2. Психбольница в руках пациентов.
          </li>
          <li className={styles.listItem}>3. Scrum. Дж. Сазерленд.</li>
        </ol>
        <h2 className={styles.title}>Полезные ресурсы</h2>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            1.{' '}
            <a
              className={styles.listLink}
              href="https://dou.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dou.ua
            </a>
          </li>
          <li className={styles.listItem}>
            2.{' '}
            <a
              className={styles.listLink}
              href="https://habr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Habr
            </a>
          </li>
          <li className={styles.listItem}>
            3.{' '}
            <a
              className={styles.listLink}
              href="https://www.facebook.com/QA"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/QA
            </a>
          </li>
          <li className={styles.listItem}>
            4.{' '}
            <a
              className={styles.listLink}
              href="https://goit.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              goit.ua
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MaterialsPage;
