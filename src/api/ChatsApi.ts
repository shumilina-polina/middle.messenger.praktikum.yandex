import { CreateChatData } from '@/types/apiDataTypes';
import { API } from './api';
import { ENDPOINTS } from '@/types/endpoints';

class ChatsApi extends API {
  constructor() {
    super(ENDPOINTS.chats);
  }

  getChats() {
    return this.http.get('', { data: { limit: '20' } });
  }

  createChat(data: CreateChatData) {
    return this.http.post('/', { data: data });
  }

  changeChatAvatar(data: FormData) {
    return this.http.put('/avatar', { data: data });
  }

  deleteChat(chatId: number) {
    return this.http.delete('', { data: { chatId: chatId } });
  }
}

export default new ChatsApi();
