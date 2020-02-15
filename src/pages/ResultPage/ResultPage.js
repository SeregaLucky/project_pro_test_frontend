import React from 'react';
import T from 'prop-types';
import { objCommentImage } from './commentaryImages.js';
import { objCommentInfo } from './commentaryInfo.tsx';
import ResultProgressBar from '../../components/ResultProgressBar/ResultProgressBar.js';
import Button from '../../components/Button';
import styles from './ResultPage.module.css';

const ResultPage = ({ answeredRight = 8, answeredWrong = 4 }) => {
  const allAnswers = answeredRight + answeredWrong;
  const answerParsentResult = (answeredRight * 100) / allAnswers;
  const answerNumber = Math.round(allAnswers * (answerParsentResult / 100));
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.main_header}>Результаты</h2>
        <p className={styles.test_title}>[ теория тестирования_ ]</p>
        <div className={styles.result_bar}>
          <ResultProgressBar
            correctAnswers={answeredRight}
            allAnswers={allAnswers}
          />
        </div>
        <div className={styles.img_container}>
          <img
            className={styles.img}
            src={objCommentImage[answerNumber]}
            alt="cat"
          />
        </div>
        <h3 className={styles.test_info}>{objCommentInfo[answerNumber]}</h3>
        <div className={styles.result_button}>
          <Button lable={'Пройти еще раз'} />
        </div>
      </div>
    </section>
  );
};

ResultPage.propTypes = {
  answeredRight: T.number.isRequired,
  answeredWrong: T.number.isRequired,
};

export default ResultPage;
