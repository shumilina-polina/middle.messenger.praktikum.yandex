import { API } from './api';
import { ENDPOINTS } from '@/types/endpoints';
import { ChangeData, ChangePassword } from '../types/apiDataTypes';

class ChangeDataApi extends API {
  constructor() {
    super(ENDPOINTS.user);
  }

  changeData(data: ChangeData) {
    return this.http.put('/profile', { data: data });
  }

  changePassword(data: ChangePassword) {
    return this.http.put('/password', { data: data });
  }

  changeAvatar(data: FormData) {
    return this.http.put('/profile/avatar', { data: data });
  }
}

export default new ChangeDataApi();
