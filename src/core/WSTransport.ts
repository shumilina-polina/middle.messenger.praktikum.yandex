import { EventBus } from './EventBus';

const enum EVENTS {
  Error = 'error',
  Connected = 'connected',
  Close = 'close',
  Message = 'message',
}

export class WSTransport extends EventBus {
  private readonly WS_URL = 'wss://ya-praktikum.tech/ws/chats/';
  private socket?: WebSocket;
  private pingInterval?: ReturnType<typeof setInterval>;
  private readonly pingIntervalTime = 30000; //интервал между пингами
  private url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  public send(data: string | number | object) {
    if (!this.socket) {
      throw new Error('Socket не присоединён');
    }

    this.socket.send(JSON.stringify(data));
  }

  public connect(): Promise<void> {
    if (this.socket) {
      throw new Error('Socket уже присоединён');
    }

    this.socket = new WebSocket(this.WS_URL + this.url);
    this.subscribe(this.socket);
    this.setupPing();

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
      } catch (error) {}
    });
  }
}
