import React from 'react';
import styles from './DashboardForm.module.css';

const answerQuestions = [
  'Это тестирование основного функционала приложения',
  'Тестирование отдельной функции',
  'Тестирование требований',
  'Тесты на уже протестированных участках приложения',
  'Один из видов тестирования, направленного на проверку соответствий функциональных требовний ПО к его реальным характеристикам',
  'Не знаю',
];

const question = ['Что такое регрессионное тестирование?'];
const DashboardForm = () => {
  const itemsAnswersQuestions = answerQuestions.map(answer => {
    return (
      <li className={styles.answer_item}>
        <label>
          <input
            className={styles.answer_item__input}
            type="radio"
            name="answer"
          />
          <p className={styles.answer_item__text}>{answer}</p>
        </label>
      </li>
    );
  });

  return (
    <div className={styles.dashboardform}>
      <p className={styles.dashboardform__counter}>
        вопрос <span>{3}</span> / 12 {}
      </p>
      <h2 className={styles.dashboardform__question}>{question}</h2>
      <i className={styles.dashboardform__hr}></i>
      <ul className={styles.dashboardform__answers}>{itemsAnswersQuestions}</ul>
    </div>
  );
};

export default DashboardForm;
