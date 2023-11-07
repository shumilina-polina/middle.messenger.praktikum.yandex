import { tmplNotFound, tmplServerError } from './notFound.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { Link } from '@/components/Link';
import { PAGES_ROUTES } from '@/types/routes';
import Block from '@/utils/Block';

export class NotFound extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.layoutTitle = new LayoutTitle({ text: '404' });
    this.children.backLink = BackLink;
  }

  render() {
    return this.compile(tmplNotFound, this.props);
  }
}

export class ServerError extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.layoutTitle = new LayoutTitle({ text: '500' });
    this.children.backLink = BackLink;
  }

  render() {
    return this.compile(tmplServerError, this.props);
  }
}

const BackLink = new Link({
  text: 'Назад к чатам',
  url: PAGES_ROUTES.chat,
});
