import { ENDPOINTS } from '@/types/endpoints';
import { WS } from './ws';
import { Message } from '@/types/apiDataTypes';

class ChatWS extends WS {
  constructor() {
    super(ENDPOINTS.chats);
  }
  openWS(url: string) {
    return this.ws.connect(url);
  }

  sendWS(data: Message) {
    return this.ws.send(data);
  }
  closeWS() {
    return this.ws.close();
  }
}

export default new ChatWS();
