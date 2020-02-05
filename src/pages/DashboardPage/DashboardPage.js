import React, { Component } from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/svg/arrow.svg';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DashboardForm from '../../components/DashboardForm/DashboardForm';
import styles from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {
    isDisabledBackBtn: true,
    isDisabledForwardBtn: true,
  };

  componentDidUpdate() {
    const {
      questionNumber,
      questions,
      addToResult,
      result,
      sendResult,
    } = this.props;
    const { isDisabledBackBtn, isDisabledForwardBtn } = this.state;
    // console.log(result && result.answers);
    // console.log(questions);

    // если последний элемент выбран => со стейта забираем значения=>записываем в result
    if (questions[questions.length - 1].optionChoosed) {
      addToResult(questions);
    }

    //если result записался то запускаем put запрос
    if (
      result &&
      result.answers &&
      result.answers.length === questions.length
    ) {
      sendResult(result, questions[0].examId);
      // console.log(result);
    }

    // Disable по кнопкам двойная проверка чтобы не было зацикливания
    if (!questions[questionNumber - 1].optionChoosed && !isDisabledForwardBtn) {
      this.setState({
        isDisabledForwardBtn: true,
      });
    }

    if (questions[questionNumber - 1].optionChoosed && isDisabledForwardBtn) {
      this.setState({
        isDisabledForwardBtn: false,
      });
    }

    if (questionNumber > 1 && isDisabledBackBtn) {
      this.setState({
        isDisabledBackBtn: false,
      });
    }

    if (questionNumber === 1 && !isDisabledBackBtn) {
      this.setState({
        isDisabledBackBtn: true,
      });
    }
  }

  render() {
    const {
      increaseQuestionNumber,
      decreaseQuestionNumber,
      questions,
      questionNumber,
      result,
    } = this.props;
    const { isDisabledBackBtn, isDisabledForwardBtn } = this.state;

    return (
      // если массив записался в result перенаправляем на страницу результата

      questions && (
        <>
          {result &&
          result.answers &&
          result.answers.length === questions.length ? (
            <Redirect to="/result" />
          ) : null}
          <div className={styles.dashboardPage}>
            <section className={styles.dashboardPageContainer}>
              <div className={styles.titleContainer}>
                <h2 className={styles.titleContainer__title}>
                  [ Теория тестирования_ ]
                </h2>
                <Button lable={'Завершить тест'} />
              </div>

              {/* <div className={styles.dashboardForm}> */}
              <DashboardForm
                question={questions[questionNumber - 1]}
                questionNumber={questionNumber}
                questionQuantity={questions.length}
                result={result}
              />

              {/* </div> */}
              <div className={styles.btnContainer}>
                <button
                  className={styles.btnContainer__back}
                  type="button"
                  onClick={decreaseQuestionNumber}
                  disabled={isDisabledBackBtn}
                >
                  <Arrow className={styles.btnContainer__arrow_back} />
                  <span className={styles.btnContainer__backText}>
                    Предыдущий вопрос
                  </span>
                </button>

                <button
                  className={styles.btnContainer__forward}
                  type="button"
                  onClick={increaseQuestionNumber}
                  disabled={isDisabledForwardBtn}
                >
                  <span className={styles.btnContainer__forwardText}>
                    Следующий вопрос
                  </span>
                  <Arrow className={styles.btnContainer__arrow_forward} />
                </button>
              </div>
            </section>
          </div>
        </>
      )
    );
  }
}

export default DashboardPage;
