import { expect } from 'chai';
import Sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import { HTTPTransport } from './HTTPTransport';

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

  it('method get() should be called with GET method', () => {
    instance.get('/');

    expect(requests[0].method).to.eq('Get');
  });
});
