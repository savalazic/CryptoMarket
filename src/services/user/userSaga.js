import { put, call, takeEvery } from 'redux-saga/effects';

import {
  ActionTypes,
  getUserInfoSuccess,
  getUserInfoFailure,
} from './userActions';
import userApi from './userApi';

export function* getUserInfo() {
  const { response, error } = yield call(userApi.getUserInfo);

  if (response) {
    yield put(getUserInfoSuccess(response.data));
  } else {
    yield put(getUserInfoFailure(error.response.data));
  }
}

export default function* userSaga() {
  yield takeEvery(ActionTypes.GET_USER_INFO_REQUEST, getUserInfo);
}
