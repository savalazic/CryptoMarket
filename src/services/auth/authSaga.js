import { put, call, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import authApi from './authApi';
import { ActionTypes, loginSuccess, loginFailure } from './authActions';
import { getUser } from '../user/userActions';

export function* login(action) {
  const { response, error } = yield call(
    authApi.login,
    action.payload.email,
    action.payload.password,
  );

  if (response) {
    yield put(loginSuccess(response.data));
    yield put(getUser());
    yield put(NavigationActions.navigate({ routeName: 'App' }));
  } else {
    yield put(loginFailure(error.response.data));
  }
}

export default function* authSaga() {
  yield takeEvery(ActionTypes.LOGIN_REQUEST, login);
}
