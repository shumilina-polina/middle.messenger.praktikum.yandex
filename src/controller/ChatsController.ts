import ChatsApi from '@/api/ChatsApi';
import { store } from '@/core/Store';
import { CreateChatData } from '@/types/apiDataTypes';

export class ChatsController {
  static async fetchChats() {
    try {
      const chats = await ChatsApi.getChats();
      store.set('chats', chats);
      console.log('chats из fetchChats: ', chats);
    } catch (err) {
      console.log('Ошибка получения чатов: ', err);
    }
  }

  static async createChat(data: CreateChatData) {
    try {
      await ChatsApi.createChat(data);
      await this.fetchChats();

      const { chats } = store.getState();
      console.log('chats: ', chats);
      console.log('ОБНОВИЛИСЬ ЧАТЫ В CREATECHAT()');
    } catch (err) {
      console.log('Ошибка создания чата: ', err);
    }
  }
}
