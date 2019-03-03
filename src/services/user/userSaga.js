import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import {
  ActionTypes,
  getUserInfoSuccess,
  getUserInfoFailure,
} from './userActions';
import userApi from './userApi';
import { getToken } from '../auth/authSelectors';

export function* getUserInfo() {
  const token = yield select(getToken);
  const { response, error } = yield call(userApi.getUserInfo, token);

  if (response) {
    yield put(getUserInfoSuccess(response.data));
  } else {
    yield put(getUserInfoFailure(error.response.data));
  }
}

export default function* userSaga() {
  yield takeEvery(ActionTypes.GET_USER_INFO_REQUEST, getUserInfo);
}
