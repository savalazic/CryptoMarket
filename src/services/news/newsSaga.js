import { put, call, takeEvery } from 'redux-saga/effects';

import { ActionTypes, getNewsSuccess, getNewsFailure } from './newsActions';
import newsApi from './newsApi';

export function* getNews(action) {
  const { response, error } = yield call(
    newsApi.getNews,
    action.payload.limit,
    action.payload.offset,
  );

  if (response) {
    yield put(getNewsSuccess(response.data));
  } else {
    yield put(getNewsFailure(error.response.data));
  }
}

export default function* newsSaga() {
  yield takeEvery(ActionTypes.GET_NEWS_REQUEST, getNews);
}
