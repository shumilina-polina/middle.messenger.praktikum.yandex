import AuthApi from '@/api/AuthApi';
import { LoginData, RegisterData } from '@/api/apiDataTypes';

export class AuthController {
  static async fetchUser() {
    try {
      const user = await AuthApi.getUser();
      console.log('user: ', user);
    } catch (err) {
      console.log('Ошибка получения информации о пользователе: ', err);
    }
  }

  static async login(data: LoginData) {
    try {
      AuthApi.login(data);
    } catch (err) {
      console.log('Ошибка входа: ', err);
    }
  }

  static async register(data: RegisterData) {
    try {
      AuthApi.register(data);
    } catch (err) {
      console.log('Ошибка регистрации: ', err);
    }
  }

  static async logout() {
    try {
      AuthApi.logout();
    } catch (err) {
      console.log('Ошибка выхода: ', err);
    }
  }
}
