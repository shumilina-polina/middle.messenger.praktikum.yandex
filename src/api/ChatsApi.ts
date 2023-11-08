import { API } from './api';
import { ENDPOINTS } from '@/types/endpoints';
import { ChangeData } from '../types/apiDataTypes';

class ChatsApi extends API {
  constructor() {
    super(ENDPOINTS.chats);
  }

  // changeData(data: ChangeData) {
  //   return this.http.put('/profile', { data: data });
  // }
}

export default new ChatsApi();
