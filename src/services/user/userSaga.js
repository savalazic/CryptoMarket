import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import { ActionTypes, getUserSuccess, getUserFailure } from './userActions';
import userApi from './userApi';
import { getToken } from '../auth/authSelectors';

export function* getUser() {
  const token = yield select(getToken);
  const { response, error } = yield call(userApi.getUser, token);

  if (response) {
    yield put(getUserSuccess(response.data));
  } else {
    yield put(getUserFailure(error.response.data));
  }
}

export default function* userSaga() {
  yield takeEvery(ActionTypes.GET_USER_REQUEST, getUser);
}
