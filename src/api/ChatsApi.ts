import { AddUserToChatData, CreateChatData } from '@/types/apiDataTypes';
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

  getChatUsers(chatId: number) {
    return this.http.get(`/${chatId}/users`);
  }

  addUsersToChat(data: AddUserToChatData) {
    return this.http.put(`/users`, { data: data });
  }

  deleteUsersFromChat(data: AddUserToChatData) {
    return this.http.delete(`/users`, { data: data });
  }
}

export default new ChatsApi();
