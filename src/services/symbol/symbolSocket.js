import io from 'socket.io-client';

export const SOCKET_EVENTS = {
  SUBSCRIBE: 'SUBSCRIBE',
  UNSUBSCRIBE: 'UNSUBSCRIBE',
  TICK: 'TICK',
};

class SymbolSocket {
  constructor(url, token) {
    this.socket = null;
    this.url = url;
    this.token = token;
  }

  connect(messageHandler) {
    const { token } = this;

    this.socket = io(this.url, {
      transports: ['websocket'],
      query: {
        accessToken: token,
      },
    });

    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('subscribe_success', (e) => {
      messageHandler({
        type: SOCKET_EVENTS.SUBSCRIBE,
        payload: e,
      });
    });

    this.socket.on('unsubscribe_success', (e) => {
      messageHandler({
        type: SOCKET_EVENTS.UNSUBSCRIBE,
        payload: e,
      });
    });

    this.socket.on('tick', (e) => {
      messageHandler({
        type: SOCKET_EVENTS.TICK,
        payload: e,
      });
    });

    this.socket.on('error', (error) => {
      console.log('socket error', error);
    });

    this.socket.on('close', () => {
      this.socket.close();
    });
  }

  subscribe(message) {
    this.socket.emit('subscribe', message);
  }

  unsubscribe(message) {
    this.socket.emit('unbscribe', message);
  }

  disconnect() {
    this.socket.close();
  }
}

export default SymbolSocket;
