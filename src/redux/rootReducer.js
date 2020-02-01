import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import questionsReduser from './questions/questionsReducer';
import globalReducer from './global/globalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  questions: questionsReduser,
  global: globalReducer,
});

export default rootReducer;
