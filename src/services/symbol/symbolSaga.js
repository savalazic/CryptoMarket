import { put, call, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './symbolActions';

export function* getSymbols(action) {}

export default function* symbolSaga() {
  yield takeEvery(ActionTypes.GET_SYMBOLS_REQUEST, getSymbols);
}
