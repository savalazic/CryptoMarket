import { all, fork } from 'redux-saga/effects';

import serviceSaga from './services/serviceSaga';

export default function* root() {
  yield all([fork(serviceSaga)]);
}
