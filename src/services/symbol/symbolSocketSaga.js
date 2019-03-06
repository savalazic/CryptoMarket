import { AsyncStorage } from 'react-native';
import { eventChannel } from 'redux-saga';
import { put, call, take } from 'redux-saga/effects';

import { SOCKET_URL } from '../../config';

function webSocketInitChannel(accessToken) {
  return eventChannel((emmiter) => {
    // eslint-disable-next-line
    const ws = new WebSocket(`${SOCKET_URL}/?accessToken=${accessToken}`);

    ws.onopen = () => {
      console.log('socket open..');
    };

    ws.onerror = (error) => {
      console.log('socket error', error);
      // emmiter(
      //   warning({
      //     message: 'Something wrong happened',
      //   }),
      // );
    };

    ws.onmessage = (e) => {
      console.log('socket message', e);

      // let msg = '';
      // let conversationId = '';
      // if (e.data) {
      //   msg = JSON.parse(e.data).message;
      //   conversationId = JSON.parse(e.data).message.conversation;

      //   emmiter(
      //     info({
      //       message: "You've got new message",
      //       action: {
      //         label: 'Click to see new message',
      //         callback: () => emmiter(push(`/chat/${conversationId}`)),
      //       },
      //     }),
      //   );

      //   return emmiter(receiveConversationMessageSuccess(msg));
      // }
    };

    ws.onclose = (e) => {
      console.log('socket closed', e);
      ws.close();
    };

    return () => {
      // unsubscribe
      console.log('socket off');
      ws.close();
    };
  });
}

export default function* symbolSocketSaga() {
  const accessToken = yield call([AsyncStorage, 'getItem'], 'accessToken');
  const channel = yield call(webSocketInitChannel, accessToken);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
