import React from 'react';
import { objCommentImage } from './commentaryImages.js';
import { objCommentInfo } from './commentaryInfo.js';
import ResultProgressBar from '../../components/ResultProgressBar/ResultProgressBar.js';
import Button from '../../components/Button';
import styles from './ResultPage.module.css';

const ResultPage = ({ answeredRight = 8, answeredWrong = 4 }) => {
  const allAnswers = answeredRight + answeredWrong;
  const answerParsentResult = (answeredRight * 100) / allAnswers;
  const answerNumber = Math.round(13 * (answerParsentResult / 100));
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.main_header}>Результаты</h2>
        <p className={styles.test_title}>[ теория тестирования_ ]</p>
        <div className={styles.result_bar}>
          <ResultProgressBar />
        </div>
        <img
          className={styles.img}
          src={objCommentImage[answerNumber]}
          alt="cat"
        />
        <h3 className={styles.test_info}>{objCommentInfo[answerNumber]}</h3>
        <div className={styles.result_button}>
          <Button lable={'Пройти еще раз'} />
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
