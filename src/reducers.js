import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import App from './App';

import serviceReducer from './services/serviceReducer';

const navReducer = createNavigationReducer(App);

const reducers = combineReducers({
  services: serviceReducer,
  nav: navReducer,
});

export default reducers;
