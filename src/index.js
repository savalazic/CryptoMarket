import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';

import Loading from '@components/Loading';

import { theme } from './theme';
import App from './App';

import reducers from './reducers';
import sagas from './sagas';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const sagaMiddleware = createSagaMiddleware();

// use http://remotedev.io/local/ for redux devtools
const enhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware, navMiddleware),
);

const Appliocation = reduxifyNavigator(App, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(Appliocation);
const store = createStore(reducers, enhancer);
const persistore = persistStore(store);

sagaMiddleware.run(sagas);

export default () => (
  <PaperProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistore} loading={<Loading />}>
        <AppWithNavigationState />
      </PersistGate>
    </Provider>
  </PaperProvider>
);
