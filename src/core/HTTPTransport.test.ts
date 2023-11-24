import { expect } from 'chai';
import Sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import { HTTPTransport, METHODS } from './HTTPTransport';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  const instance = new HTTPTransport('');
  const requests: SinonFakeXMLHttpRequest[] = [];
  beforeEach(() => {
    xhr = Sinon.useFakeXMLHttpRequest();

    //@ts-expect-error
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (req) => {
      requests.push(req);
    };
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  describe('Method', () => {
    it('get() should be called with GET method', () => {
      instance.get('/');
      expect(requests[0].method).to.eq(METHODS.GET);
    });
    it('post() should be called with POST method', () => {
      instance.post('/');
      expect(requests[0].method).to.eq(METHODS.POST);
    });
    it('put() should be called with PUT method', () => {
      instance.put('/');
      expect(requests[0].method).to.eq(METHODS.PUT);
    });
    it('delete() should be called with DELETE method', () => {
      instance.delete('/');
      expect(requests[0].method).to.eq(METHODS.DELETE);
    });
  });

  it('makes get request with valid options string', () => {
    instance.get('/path', { data: { userId: 12, page: 2 } });
    expect(requests[0].url).to.eq(
      HTTPTransport.API_URL + '/path?userId=12&page=2'
    );
  });

  it('makes get request with valid options string with array', () => {
    instance.get('', { data: { userId: [12, 3, 6], opt: ['some', 'option'] } });
    expect(requests[0].url).to.eq(
      HTTPTransport.API_URL + '?userId=12,3,6&opt=some,option'
    );
  });

  it('makes get request without options string if data is empty object', () => {
    instance.get('', { data: {} });
    expect(requests[0].url).to.eq(HTTPTransport.API_URL);
  });
});
