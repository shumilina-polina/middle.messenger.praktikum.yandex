import AuthApi from '@/api/AuthApi';
import Router from '@/core/Router';
import { store } from '@/core/Store';
import { LoginData, RegisterData } from '@/types/apiDataTypes';
import { PAGES_ROUTES } from '@/types/routes';

export class AuthController {
  static async fetchUser() {
    try {
      const user = await AuthApi.getUser();
      store.set('user', user);
    } catch (err) {
      throw err;
    }
  }

  static async login(data: LoginData) {
    try {
      await AuthApi.login(data);
      Router.go(PAGES_ROUTES.profile);
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
    } catch (err) {
      console.log('Ошибка выхода: ', err);
    }
  }
}
