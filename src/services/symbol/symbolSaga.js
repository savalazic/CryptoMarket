import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import {
  ActionTypes,
  getSymbolsSuccess,
  getSymbolsFailure,
  getSymbolSuccess,
  getSymbolFailure,
  getWatchlistSuccess,
  getWatchlistFailure,
  addToWatchlistSuccess,
  addToWatchlistFailure,
  getSymbolChartDataSuccess,
  getSymbolChartDataFailure,
} from './symbolActions';
import { getSymbolsMapSelector } from './symbolSelectors';
import symbolApi from './symbolApi';

export function* getSymbols(action) {
  console.log(action);
  const { response, error } = yield call(symbolApi.getSymbols, action.payload);

  if (response) {
    yield put(getSymbolsSuccess(response.data));
  } else {
    yield put(getSymbolsFailure(error.response.data));
  }
}

export function* getSymbol(action) {
  const { response, error } = yield call(
    symbolApi.getSymbol,
    action.payload.userId,
    action.payload.symbolId,
  );

  if (response) {
    yield put(getSymbolSuccess(response.data));
  } else {
    yield put(getSymbolFailure(error.response.data));
  }
}

export function* getWatchlist(action) {
  const { response, error } = yield call(
    symbolApi.getWatchlist,
    action.payload,
  );

  if (response) {
    yield put(getWatchlistSuccess(response.data));
  } else {
    yield put(getWatchlistFailure(error.response.data));
  }
}

export function* addToWatchlist(action) {
  const symbols = yield select(getSymbolsMapSelector);
  const symbol = symbols[action.payload.symbolId];

  const { response, error } = yield call(
    symbolApi.addToWatchlist,
    action.payload.accountId,
    action.payload.symbolId,
    !symbol.isFollowing,
  );

  if (response) {
    const symbolData = {
      ...response.data,
      isFollowing: !symbol.isFollowing,
    };
    yield put(addToWatchlistSuccess(symbolData));
  } else {
    yield put(addToWatchlistFailure(error.response.data));
  }
}

export function* getChartData(action) {
  const { response, error } = yield call(
    symbolApi.getChartData,
    action.payload.userId,
    action.payload.symbolId,
  );

  if (response) {
    yield put(getSymbolChartDataSuccess(response.data));
  } else {
    yield put(getSymbolChartDataFailure(error.response.data));
  }
}

export default function* symbolSaga() {
  yield takeEvery(ActionTypes.GET_SYMBOLS_REQUEST, getSymbols);
  yield takeEvery(ActionTypes.GET_SYMBOL_REQUEST, getSymbol);
  yield takeEvery(ActionTypes.GET_WATCHLIST_REQUEST, getWatchlist);
  yield takeEvery(ActionTypes.ADD_TO_WATCHLIST_REQUEST, addToWatchlist);
  yield takeEvery(ActionTypes.GET_SYMBOL_CHART_DATA_REQUEST, getChartData);
}
