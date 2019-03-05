import { AsyncStorage } from 'react-native';
import { put, call, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import authApi from './authApi';
import { ActionTypes, loginSuccess, loginFailure } from './authActions';
import { getUserInfo } from '../user/userActions';

export function* login(action) {
  const { response, error } = yield call(
    authApi.login,
    action.payload.email,
    action.payload.password,
  );

  if (response) {
    yield put(loginSuccess(response.data));
    yield call(
      [AsyncStorage, 'setItem'],
      'accessToken',
      response.data.accessToken,
    );
    yield call(
      [AsyncStorage, 'setItem'],
      'refreshToken',
      response.data.refreshToken,
    );
    yield put(getUserInfo());
    yield put(NavigationActions.navigate({ routeName: 'App' }));
  } else {
    yield put(loginFailure(error.response.data));
  }
}

export default function* authSaga() {
  yield takeEvery(ActionTypes.LOGIN_REQUEST, login);
}
