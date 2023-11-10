import ChatsApi from '@/api/ChatsApi';
import { store } from '@/core/Store';
import { CreateChatData } from '@/types/apiDataTypes';

export class ChatsController {
  static async fetchChats() {
    try {
      const chats = await ChatsApi.getChats();
      store.set('chats', chats);
    } catch (err) {
      console.log('Ошибка получения чатов: ', err);
    }
  }

  static async createChat(data: CreateChatData) {
    try {
      await ChatsApi.createChat(data);
      await this.fetchChats();
    } catch (err) {
      console.log('Ошибка создания чата: ', err);
    }
  }

  static async changeChatAvatar(data: FormData) {
    try {
      await ChatsApi.changeChatAvatar(data);
      await ChatsController.fetchChats();
    } catch (err) {
      console.log('Ошибка сохранения аватара: ', err);
    }
  }
}
