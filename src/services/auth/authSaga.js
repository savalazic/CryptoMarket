import { AsyncStorage } from 'react-native';
import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import authApi from './authApi';
import { ActionTypes, loginSuccess, loginFailure } from './authActions';
import { getUserInfo, getUserAccounts } from '../user/userActions';
import { getUserInfoId } from '../user/userSelectors';

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
    yield put(getUserInfo());
    const userId = yield select(getUserInfoId);
    yield put(getUserAccounts(userId));
    yield put(NavigationActions.navigate({ routeName: 'App' }));
  } else {
    yield put(loginFailure(error.response.data));
  }
}

export function* logout() {
  yield put(NavigationActions.navigate({ routeName: 'Login' }));
}

export default function* authSaga() {
  yield takeEvery(ActionTypes.LOGIN_REQUEST, login);
  yield takeEvery(ActionTypes.LOGOUT, logout);
}
