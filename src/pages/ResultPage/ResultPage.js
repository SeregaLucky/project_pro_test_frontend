import React from 'react';
import { connect } from 'react-redux';
import * as images from './commentaryImages.js';
import { objCommentInfo } from './commentaryInfo.js';
import resultsOperations from '../../redux/results/resultsOperations';
import ResultProgressBar from '../../components/ResultProgressBar/ResultProgressBar.js';
import Button from '../../components/Button';
import styles from './ResultPage.module.css';

const ResultPage = ({
  answeredRight = 0,
  answeredWrong = 0,
  allAnswers = 12,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.main_header}>Результаты</h2>
        <p className={styles.test_title}>[ теория тестирования_ ]</p>
        <div className={styles.result_bar}>
          <ResultProgressBar />
        </div>
        <div className={styles.img}>
          <img src={images.img7} alt="cat" />
        </div>
        <h3 className={styles.test_info}>{objCommentInfo[11]}</h3>
        <div className={styles.result_button}>
          <Button lable={'Пройти еще раз'} />
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = state => ({
  onGetResultsById: id => state(resultsOperations.getResultsById(id)),
});

export default connect(null, mapDispatchToProps)(ResultPage);
