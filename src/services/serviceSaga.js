import { all, fork } from 'redux-saga/effects';

import authSaga from './auth/authSaga';

export default function* serviceSagas() {
  yield all([fork(authSaga)]);
}
