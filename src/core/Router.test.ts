import { expect } from 'chai';
import Sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import { HTTPTransport } from './HTTPTransport';

describe('Router', () => {
  it('going to a new page should change the state of the history entity', () => {
    window.history.pushState({ page: 'login' }, 'Login', '/login');
    window.history.pushState({ page: 'register' }, 'Register', '/register');

    expect(window.history.length).to.eq(3);
  });
});
