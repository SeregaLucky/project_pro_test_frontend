import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
/* import - reducers */
import authReducer from './auth/authReducer';
import questionsReduser from './questions/questionsReducer';
import globalReducer from './global/globalReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuth'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  questions: questionsReduser,
  global: globalReducer,
});

export default rootReducer;
