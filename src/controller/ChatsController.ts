import ChatsApi from '@/api/ChatsApi';
import { store } from '@/core/Store';
import { AddUserToChatData, CreateChatData } from '@/types/apiDataTypes';

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

  static async deleteChat(chatId: number) {
    try {
      await ChatsApi.deleteChat(chatId);
      await ChatsController.fetchChats();
      store.set('currentChat', undefined);
    } catch (err) {
      console.log('Ошибка удаления чата: ', err);
    }
  }

  static async fetchChatUsers(chat: any) {
    try {
      const chatId = chat.id;
      const chatUsers = await ChatsApi.getChatUsers(chatId);

      store.set('currentChat', {
        elemOptions: chat,
        chatUsers: chatUsers,
      });
    } catch (err) {
      console.log('Ошибка получения пользователей чата: ', err);
    }
  }

  static async addUsers(data: AddUserToChatData, chat: any) {
    try {
      await ChatsApi.addUsersToChat(data);
      await this.fetchChatUsers(chat);
    } catch (err) {
      console.log('Ошибка добавления пользователей: ', err);
    }
  }
  static async deleteUsers(data: AddUserToChatData, chat: any) {
    try {
      await ChatsApi.deleteUsersFromChat(data);
      await this.fetchChatUsers(chat);
    } catch (err) {
      console.log('Ошибка удаления пользователей: ', err);
    }
  }
}
