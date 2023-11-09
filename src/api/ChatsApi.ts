import { CreateChatData } from '@/types/apiDataTypes';
import { API } from './api';
import { ENDPOINTS } from '@/types/endpoints';

class ChatsApi extends API {
  constructor() {
    super(ENDPOINTS.chats);
  }

  getChats() {
    return this.http.get('/');
  }

  createChat(data: CreateChatData) {
    return this.http.post('/', { data: data });
  }
}

export default new ChatsApi();
