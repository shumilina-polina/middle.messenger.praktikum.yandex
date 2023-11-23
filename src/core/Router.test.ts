import { expect } from 'chai';
import Router from './Router';
import Sinon from 'sinon';
import Block from './Block';

describe('Router', () => {
  const sandbox = Sinon.createSandbox();

  before(function () {
    sandbox.spy(Router, 'go');
    sandbox.spy(Router, 'back');
    sandbox.spy(Router, 'forward');
    sandbox.stub(Block);
  });

  beforeEach(function () {
    (Router as any).routes = [];
  });

  after(function () {
    sandbox.restore();
  });

  it('should increment length of routes', () => {
    Router.use('/some', Block).use('/new', Block).use('/path', Block);
    const routes = (Router as any).routes;

    expect(routes).to.have.lengthOf(3);
  });

  it('should go by path', () => {
    const resultPath = '/some';
    Router.use(resultPath, Block).use('/new', Block).start();
    Router.go(resultPath);

    expect(window.location.pathname).to.eq(resultPath);
  });

  it('should back', () => {
    Router.use('/some', Block).use('/new', Block).start();
    Router.back();

    const routes = (Router as any).routes;
    expect(routes).to.have.lengthOf(2);
  });

  it('should forward', () => {
    Router.use('/some', Block).use('/new', Block).start();
    Router.forward();

    const routes = (Router as any).routes;
    expect(routes).to.have.lengthOf(2);
  });
});
