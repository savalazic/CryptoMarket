import { all, fork } from 'redux-saga/effects';

import authSaga from './auth/authSaga';
import userSaga from './user/userSaga';
import symbolSaga from './symbol/symbolSaga';
import newsSaga from './news/newsSaga';
import symbolSocketSaga from './symbol/symbolSocketSaga';

export default function* serviceSagas() {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(symbolSaga),
    fork(newsSaga),
    fork(symbolSocketSaga),
  ]);
}
