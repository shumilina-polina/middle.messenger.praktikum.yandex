import AuthApi from '@/api/AuthApi';
import Router from '@/core/Router';
import { store } from '@/core/Store';
import { LoginData, RegisterData } from '@/types/apiDataTypes';
import { PAGES_ROUTES } from '@/types/routes';
import { ChatsController } from './ChatsController';

export class AuthController {
  static async fetchUser() {
    try {
      const user = await AuthApi.getUser();
      store.set('user', user);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  static async login(data: LoginData) {
    try {
      await AuthApi.login(data);
      await this.fetchUser(); // set user in store
      await ChatsController.fetchChats();
      Router.go(PAGES_ROUTES.chat);
    } catch (err) {
      console.log('Ошибка входа: ', err);
    }
  }

  static async register(data: RegisterData) {
    try {
      await AuthApi.register(data);
      await this.fetchUser(); // set user in store
      Router.go(PAGES_ROUTES.profile);
    } catch (err) {
      console.log('Ошибка регистрации: ', err);
    }
  }

  static async logout() {
    try {
      AuthApi.logout();
      store.set('user', undefined);
      Router.go(PAGES_ROUTES.login);
    } catch (err) {
      console.log('Ошибка выхода: ', err);
    }
  }
}
