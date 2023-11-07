import { API } from './api';
import { ENDPOINTS } from '@/types/endpoints';
import { LoginData, RegisterData, UserData } from '../types/apiDataTypes';

class AuthApi extends API {
  constructor() {
    super(ENDPOINTS.auth);
  }

  register(data: RegisterData) {
    return this.http.post('/signup', { data: data });
  }

  login(data: LoginData) {
    return this.http.post('/signin', { data: data });
  }

  logout() {
    return this.http.post('/logout');
  }

  getUser() {
    return this.http.get('/user') as Promise<UserData>;
  }
}

export default new AuthApi();
