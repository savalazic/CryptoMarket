import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import utilsReducer from './utils/utilsReducer';
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';
import symbolReducer from './symbol/symbolReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const ServiceReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  utils: utilsReducer,
  symbol: symbolReducer,
});

export default ServiceReducer;
