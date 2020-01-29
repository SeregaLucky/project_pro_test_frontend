import React from 'react';
// import T from 'prop-types';
import MainTestButton from '../../components/MainTestButton/MainTestButton';
import styles from './MainPage.module.css';

const ID_NEED_TEST = {
  id1: '5e29edc351e2cd3a659a8e4e',
  id2: '5e2de905933b4f3b74d81d59',
};

const MainPage = ({ quote }) => {
  return (
    <section className={styles.mainPage}>
      <div className={styles.container}>
        <h2 className={styles.mainPage_quote}>
          {quote}
          "Регресионное тестирование. Что это? Если система комплириется, то это
          хорошо, если загружается, то это просто здорово!"
        </h2>
        <h3 className={styles.mainPage_author}>Линус Торвальдс</h3>
        <p className={styles.mainPage_descr}>
          Финский программист, хакер, 1969 г.
        </p>
        <div className={styles.mainPage_buttons}>
          <ul className={styles.mainPage_buttonItems}>
            <MainTestButton idTest={ID_NEED_TEST.id1} />
            <MainTestButton idTest={ID_NEED_TEST.id2} />
          </ul>
        </div>
      </div>
    </section>
  );
};

// MainPage.propTypes = {
//   quote: T.string.isRequired,
// };

export default MainPage;
