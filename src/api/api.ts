import { ENDPOINTS } from '@/types/endpoints';
import { HTTPTransport } from '@/core/HTTPTransport';

export abstract class API {
  protected http: HTTPTransport;
  protected constructor(endpoint: ENDPOINTS) {
    this.http = new HTTPTransport(endpoint);
  }
}
