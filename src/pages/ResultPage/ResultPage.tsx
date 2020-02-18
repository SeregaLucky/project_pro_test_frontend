import React from 'react';
import { objCommentImage } from './commentaryImages';
import { objCommentInfo } from './commentaryInfo';
import ResultProgressBar from '../../components/ResultProgressBar/ResultProgressBar';
import Button from '../../components/Button';
import styles from './ResultPage.module.css';

interface ResultPageProps {
  answeredRight: number;
  answeredWrong: number;
}

const ResultPage: React.FC<ResultPageProps> = ({
  answeredRight,
  answeredWrong,
}) => {
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

export default ResultPage;
