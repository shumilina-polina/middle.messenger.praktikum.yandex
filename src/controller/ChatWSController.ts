import ChatWS from '@/api/ChatWS';
import { store } from '@/core/Store';
import { Message } from '@/types/apiDataTypes';
import { ChatsController } from './ChatsController';

export class ChatWSController {
  static async openWS(chatId: number, token: string) {
    try {
      this.closeWS();
      const { user } = store.getState();
      await ChatWS.openWS(`/${user?.id}/${chatId}/${token}`);
      await ChatWS.sendWS({
        content: '0', // Число, которое показывает с какого сообщения нужно отдать ещё 20
        type: 'get old',
      });
    } catch (err) {
      console.log('Ошибка открытия WebSocket-соединения: ', err);
    }
  }

  static async sendMessage(data: Message) {
    try {
      data = { ...data, type: 'message' };
      await ChatWS.sendWS(data);
      await ChatsController.fetchChats();
    } catch (err) {
      console.log('Ошибка отправки сообщения: ', err);
    }
  }

  static async closeWS() {
    try {
      await ChatWS.closeWS();
    } catch (err) {
      console.log('Ошибка закрытия WebSocket-соединения: ', err);
    }
  }
}
