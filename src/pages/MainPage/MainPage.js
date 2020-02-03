import React from 'react';
import MainTestButton from '../../components/MainTestButton/MainTestButton';
import listQuotes from './listQuotes';
import styled from 'styled-components';
import styles from './MainPage.module.css';

// const StyledButton = styled.li`
// // background-color: #121d2e;
// // ${props => props.customStyle}
// // `;

const ID_NEED_TEST = {
  id1: '5e29edc351e2cd3a659a8e4e',
  id2: '5e2de905933b4f3b74d81d59',
};

const TEXT_BUTTON = ['Техническая подготовка QA', 'Теория тестирования'];

const MainPage = () => {
  const randomNumber = Math.floor(Math.random() * listQuotes.length);
  const { quote, author, description } = listQuotes[randomNumber];
  return (
    <section className={styles.mainPage}>
      <div className={styles.container}>
        <h2 className={styles.mainPage_quote}>{quote}</h2>
        <h3 className={styles.mainPage_author}>{author}</h3>
        <p className={styles.mainPage_descr}>{description}</p>

        <div className={styles.mainPage_buttons}>
          <ul className={styles.mainPage_buttonItems}>
            <MainTestButton idTest={ID_NEED_TEST.id1} text={TEXT_BUTTON[0]} />
            <MainTestButton idTest={ID_NEED_TEST.id2} text={TEXT_BUTTON[1]} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
