import { AsyncStorage } from 'react-native';
import { eventChannel } from 'redux-saga';
import {
  call,
  all,
  take,
  fork,
  put,
  takeEvery,
  cancel,
  delay,
} from 'redux-saga/effects';

import { SOCKET_URL } from '../../config';

import SymbolSocket, { SOCKET_EVENTS } from './symbolSocket';

import { receiveSymbolPrice, ActionTypes } from './symbolActions';

const createWebSocket = (url, token) => new SymbolSocket(url, token);

const createWebSocketChannel = webSocket => eventChannel((emit) => {
  const messageHandler = data => emit(data);
  webSocket.connect(messageHandler);

  return () => {
    webSocket.close();
  };
});

function* receiveWebSocketMessage(webSocketChannel) {
  while (true) {
    // debounce channel to take data from socket on every 1 second
    // to get smoother rendering
    yield delay(1000);
    const wsMessage = yield take(webSocketChannel);
    const { type, payload } = wsMessage;

    if (type === SOCKET_EVENTS.TICK) {
      yield put(receiveSymbolPrice(payload));
    }
  }
}

function* sendWebSocketMessage(webSocket) {
  while (true) {
    const { payload } = yield take(ActionTypes.SUBSCRIBE_SYMBOL_PRICE);
    yield call([webSocket, 'subscribe'], payload);
  }
}

let tasks;

function* openSocket() {
  const accessToken = yield call([AsyncStorage, 'getItem'], 'accessToken');
  const webSocket = yield call(createWebSocket, SOCKET_URL, accessToken);
  const webSocketChannel = yield call(createWebSocketChannel, webSocket);

  tasks = yield all([
    fork(sendWebSocketMessage, webSocket),
    fork(receiveWebSocketMessage, webSocketChannel),
  ]);
}

function* closeSocket() {
  yield cancel(tasks);
}

export default function* symbolSocketSaga() {
  yield takeEvery(ActionTypes.OPEN_SYMBOL_SOCKET, openSocket);
  yield takeEvery(ActionTypes.CLOSE_SYMBOL_SOCKET, closeSocket);
}
