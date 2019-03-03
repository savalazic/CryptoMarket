import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import {
  ActionTypes,
  getWatchlistSuccess,
  getWatchlistFailure,
  addToWatchlistSuccess,
  addToWatchlistFailure,
} from './watchlistActions';
import { getToken } from '../auth/authSelectors';
import watchlistApi from './watchlistApi';

export function* getWatchlist(action) {
  const token = yield select(getToken);
  const { response, error } = yield call(
    watchlistApi.getWatchlist,
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
    watchlistApi.addToWatchlist,
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
  yield takeEvery(ActionTypes.GET_WATCHLIST_REQUEST, getWatchlist);
  yield takeEvery(ActionTypes.ADD_TO_WATCHLIST_REQUEST, addToWatchlist);
}
