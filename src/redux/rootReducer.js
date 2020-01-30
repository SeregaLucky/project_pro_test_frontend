import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import questionsReduser from './questions/questionsReducer';
import globalReducer from './global/globalReducer';
import resultsReducer from './results/resultsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  questions: questionsReduser,
  global: globalReducer,
  result: resultsReducer,
});

export default rootReducer;
