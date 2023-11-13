import { WSTransport } from '@/core/WSTransport';

export abstract class WS {
  protected ws: WSTransport;
  protected constructor(url: string) {
    this.ws = new WSTransport(url);
  }
}
