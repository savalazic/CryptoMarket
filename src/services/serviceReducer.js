import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import utilsReducer from './utils/utilsReducer';
import authReducer from './auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const ServiceReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  utils: utilsReducer,
});

export default ServiceReducer;
