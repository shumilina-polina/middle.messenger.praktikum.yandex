import { ChangePassword } from './../types/apiDataTypes';
import ChangeDataApi from '@/api/ChangeDataApi';
import Router from '@/core/Router';
import { ChangeData } from '@/types/apiDataTypes';
import { PAGES_ROUTES } from '@/types/routes';
import { AuthController } from './AuthController';

export class ChangeDataController {
  static async changeData(data: ChangeData) {
    try {
      await ChangeDataApi.changeData(data);
      await AuthController.fetchUser(); // set user in store
      Router.go(PAGES_ROUTES.profile);
    } catch (err) {
      console.log('Ошибка сохранения данных: ', err);
    }
  }

  static async changePassword(data: ChangePassword) {
    try {
      await ChangeDataApi.changePassword(data);
      // await AuthController.fetchUser(); // set user in store
      Router.go(PAGES_ROUTES.profile);
    } catch (err) {
      console.log('Ошибка сохранения нового пароля: ', err);
    }
  }
  
  static async changeAvatar(data: FormData) {
    try {
      await ChangeDataApi.changeAvatar(data);
      await AuthController.fetchUser(); // set user in store
      Router.go(PAGES_ROUTES.profile);
    } catch (err) {
      console.log('Ошибка сохранения нового аватара: ', err);
    }
  }
}
