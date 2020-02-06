import { combineReducers } from 'redux';
import resultsTypes from './questionsTypes';
import questionsTypes from './questionsTypes';

// const initialStateQuestions = {
//   questions: [
//     {
//       id: '5e300719a564ad646943b61f',
//       examId: '5e300719a564ad646943b61e',
//       question: 'Who is the best?',
//       choices: [
//         {
//           id: 1,
//           title: "I'm the best",
//         },
//         {
//           id: 2,
//           title: "They're the best",
//         },
//       ],
//       optionChoosed: null,
//     },
//     {
//       id: '5e300719a564ad646943b622',
//       examId: '5e300719a564ad646943b61e',
//       question: 'Where do you live?',
//       choices: [
//         {
//           id: 1,
//           title: 'Kiev',
//         },
//         {
//           id: 2,
//           title: 'Odessa',
//         },
//       ],
//       optionChoosed: null,
//     },
//     {
//       id: '5e300719a564ad646943b625',
//       examId: '5e300719a564ad646943b61e',
//       question: "What's your name?",
//       choices: [
//         {
//           id: 1,
//           title: 'Mykola',
//         },
//         {
//           id: 2,
//           title: 'Valera',
//         },
//       ],
//       optionChoosed: null,
//     },
//   ],
// };

const questionsReduсer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.POST_TEST_SUCCESS:
      return {
        idTestBlock: payload.data.exam.id,
        questions: payload.data.questions,
      };
    case questionsTypes.CHECK_ANSWER:
      const questions = state.questions.map(question => {
        if (payload.examQuestionId === question.id) {
          return { ...question, ...{ optionChoosed: payload.choiceId } };
        }
        return question;
      });
      return { ...state, questions };
    default:
      return state;
  }
};

const questionNumberReducer = (state = 1, { type }) => {
  switch (type) {
    case questionsTypes.INCREASE_QUESTION_NUMBER:
      return state + 1;
    case questionsTypes.DECREASE_QUESTION_NUMBER:
      return state - 1;
    default:
      return state;
  }
};

const finishedReducer = (state = false, { type }) => {
  switch (type) {
    case resultsTypes.RESULTS_FINISHED_SUCCESS:
      return true;
    default:
      return state;
  }
};

const resultsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_SUCCESS:
      return {
        answeredRight: payload.answeredRight,
        answeredWrong: payload.answeredWrong,
      };
    default:
      return state;
  }
};

const resultTestReduсer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.ADD_TO_RESULT:
      return payload;
    default:
      return state;
  }
};

const isResultSendedReducer = (state = false, { type, payload }) => {
  switch (type) {
    case questionsTypes.SEND_RESULT_SUCCESS:
      return payload.res;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case questionsTypes.SEND_RESULT_FAILURE:
      return payload.err;
    default:
      return state;
  }
};

const errorFinished = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_FINISHED_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

const errorResult = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  questions: questionsReduсer,
  questionNumber: questionNumberReducer,
  resultTest: resultTestReduсer,
  isResultSended: isResultSendedReducer,
  err: errorReducer,
  finished: finishedReducer,
  result: resultsReducer,
  errorFinished: errorFinished,
  errorResult: errorResult,
});
