import resultsTypes from './resultsTypes';

const resultsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case resultsTypes.RESULTS_SUCCESS:
      return { answeredRight: 0, answeredWrong: 0 };
    default:
      return state;
  }
};

export default resultsReducer;

// {
//   "exam": {
//     "id": "string",
//     "name": "string",
//     "description": "string",
//     "questionsLeft": 0,
//     "finished": true
//   },
//   "questions": [
//     {
//       "id": "string",
//       "examId": "string",
//       "question": "string",
//       "choices": [
//         {
//           "id": "string",
//           "title": "string"
//         }
//       ],
//       "optionChoosed": 0
//     }
//   ],
//   "answeredRight": 0,
//   "answeredWrong": 0
// }
