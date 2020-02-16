import React from 'react';
import { Pie } from 'react-chartjs-2';
import styles from './ResultProgressBar.module.css';

const getChartData = (correct: number, incorrect: number) => {
  const data = {
    labels: [`${correct}% Верно`, `${incorrect}% Не верно`],
    datasets: [
      {
        data: [correct, incorrect],
        backgroundColor: ['#ff6b08', '#d6d6d6'],
        hoverBackgroundColor: ['#ff6b08', '#d6d6d6'],
        borderWidth: 0,
      },
    ],
  };
  return data;
};

const options = {
  legend: {
    display: true,
  },
  rotation: 0.2 * Math.PI - (25 / 180) * Math.PI,
  maintainAspectRatio: true,
  tooltips: {
    mode: 'point',
    callbacks: {
      label: (tooltipItem: any, data: any) => {
        let label = data.labels[tooltipItem.index] || '';
        return `${label}`;
      },
    },
  },
};

interface IProps {
  correctAnswers: number;
  allAnswers: number;
}

const ResultProgressBar: React.FC<IProps> = ({
  correctAnswers,
  allAnswers = 12,
}) => {
  const chartCorrect = Math.ceil((correctAnswers * 100) / allAnswers);
  const chartInCorrect = 100 - chartCorrect;

  return (
    <div className={styles.result_wrapper}>
      <div className={styles.chart}>
        <Pie
          data={() => getChartData(chartCorrect, chartInCorrect)}
          options={options}
          width={50}
          height={50}
        />
      </div>
      <div className={styles.legend}>
        <p className={styles.legend__text}>
          Верных ответов -{' '}
          <span className={styles.result}>{correctAnswers}</span>
        </p>
        <p className={styles.legend__text}>
          Всего вопросов - <span className={styles.result}>{allAnswers}</span>
        </p>
      </div>
    </div>
  );
};

ResultProgressBar.defaultProps = {
  correctAnswers: 11,
};

export default ResultProgressBar;
