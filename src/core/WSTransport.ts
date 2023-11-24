import { EventBus } from './EventBus';
import { store } from './Store';

const enum EVENTS {
  Error = 'error',
  Connected = 'connected',
  Close = 'close',
  Message = 'message',
}

export class WSTransport extends EventBus {
  private readonly WS_URL = 'wss://ya-praktikum.tech/ws';
  private socket?: WebSocket;
  private pingInterval?: ReturnType<typeof setInterval>;
  private readonly pingIntervalTime = 30000; //интервал между пингами
  private endpoint: string;

  constructor(endpoint: string) {
    super();
    this.endpoint = endpoint;
  }

  public send(data: string | number | object) {
    if (!this.socket) {
      throw new Error('Socket не присоединён');
    }

    this.socket.send(JSON.stringify(data));
  }

  public connect(url: string): Promise<void> {
    if (this.socket) {
      throw new Error('Socket уже присоединён');
    }

    this.socket = new WebSocket(this.WS_URL + this.endpoint + url);
    this.subscribe(this.socket);
    this.setupPing();
    // this.listenMessage();

    return new Promise((resolve, rej) => {
      this.on(EVENTS.Error, rej);
      this.on(EVENTS.Connected, () => {
        this.off(EVENTS.Error, rej);
        resolve();
      });
    });
  }

  public close() {
    this.socket?.close();
    this.socket = undefined;
    clearInterval(this.pingInterval);
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, this.pingIntervalTime);

    this.on(EVENTS.Close, () => {
      clearInterval(this.pingInterval);
      this.pingInterval = undefined;
    });
  }

  // private listenMessage() {
  //   const func = (data: any) => {
  //     console.log('Получено сообщение: ', data.content);
  //   };
  //   this.on(EVENTS.Message, func);
  //   this.on(EVENTS.Close, () => {
  //     this.off(EVENTS.Message, func);
  //   });
  // }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(EVENTS.Connected);
    });
    socket.addEventListener('close', () => {
      this.emit(EVENTS.Close);
    });
    socket.addEventListener('error', (e) => {
      this.emit(EVENTS.Error, e);
    });
    socket.addEventListener('message', (message: MessageEvent<any>) => {
      try {
        const data = JSON.parse(message.data);
        if (['pong', 'user connected'].includes(data?.type)) {
          return;
        }
        this.emit(EVENTS.Message, data);
        if (Array.isArray(data)) {
          store.set('currentChat.oldMessages', data);
        } else if (data.type === 'message') {
          this.send({
            content: '0',
            type: 'get old',
          });
        }
      } catch (error) {
        console.log('ошибка: ', error);
      }
    });
  }
}
