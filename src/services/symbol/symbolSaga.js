import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import {
  ActionTypes,
  getSymbolsSuccess,
  getSymbolsFailure,
  getWatchlistSuccess,
  getWatchlistFailure,
  addToWatchlistSuccess,
  addToWatchlistFailure,
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

export function* getWatchlist(action) {
  const token = yield select(getToken);
  const { response, error } = yield call(
    symbolApi.getWatchlist,
    action.payload,
    token,
  );

  if (response) {
    yield put(getWatchlistSuccess(response.data));
  } else {
    yield put(getWatchlistFailure(error.response.data));
  }
}

export function* addToWatchlist(action) {
  const token = yield select(getToken);
  const { response, error } = yield call(
    symbolApi.addToWatchlist,
    action.payload.accountId,
    action.payload.symbolId,
    token,
    true,
  );

  if (response) {
    yield put(addToWatchlistSuccess(response.data));
  } else {
    yield put(addToWatchlistFailure(error.response.data));
  }
}

export default function* symbolSaga() {
  yield takeEvery(ActionTypes.GET_SYMBOLS_REQUEST, getSymbols);
  yield takeEvery(ActionTypes.GET_WATCHLIST_REQUEST, getWatchlist);
  yield takeEvery(ActionTypes.ADD_TO_WATCHLIST_REQUEST, addToWatchlist);
}
