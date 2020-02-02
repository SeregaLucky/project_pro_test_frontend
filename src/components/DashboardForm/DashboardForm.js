import React from 'react';
import styles from './DashboardForm.module.css';
import DashboardFormInput from '../DashboardFormInput/DashboardFormInput';

const questionAnswers = [
  'Это тестирование основного функционала приложения',
  'Тестирование отдельной функции',
  'Тестирование требований',
  'Тесты на уже протестированных участках приложения',
  'Один из видов тестирования, направленного на проверку соответствий функциональных требовний ПО к его реальным характеристикам',
  'Не знаю',
];

const question = ['Что такое регрессионное тестирование?'];

const DashboardForm = () => {
  return (
    <div className={styles.dashboardform}>
      <p className={styles.dashboardform__counter}>
        вопрос <span>{3}</span> / 12 {}
      </p>
      <h2 className={styles.dashboardform__question}>{question}</h2>
      <ul className={styles.dashboardform__answers}>
        <DashboardFormInput answers={questionAnswers} />
      </ul>
    </div>
  );
};

export default DashboardForm;
