import { WS } from './ws';

class ChatWS extends WS {
  constructor(userId: number, chatId: number, token: string) {
    super(`${userId}/${chatId}/${token}`);
  }
}

export default ChatWS;
