import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import {
  ActionTypes,
  getSymbolsSuccess,
  getSymbolsFailure,
} from './symbolActions';
import { getToken } from '../auth/authSelectors';
import symbolApi from './symbolApi';

export function* getSymbols(action) {
  const token = yield select(getToken);
  const { response, error } = yield call(
    symbolApi.getSymbols,
    action.payload,
    token,
  );

  if (response) {
    yield put(getSymbolsSuccess(response.data));
  } else {
    yield put(getSymbolsFailure(error.response.data));
  }
}

export default function* symbolSaga() {
  yield takeEvery(ActionTypes.GET_SYMBOLS_REQUEST, getSymbols);
}
