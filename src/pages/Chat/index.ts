import { FormMessage } from '@/components/Forms/FormMessage';
import { tmpl } from './chat.tmpl';
import { chats } from './testdata';
import Block from '@/core/Block';
import { onSubmitForm } from '@/components/Forms/form';
import { Link } from '@/components/Link';
import { PAGES_ROUTES } from '@/types/routes';
import s from './chat.module.scss';
import Router from '@/core/Router';

export class Chat extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.profileLink = new Link({
      text: 'Профиль >',
      events: {
        click: () => Router.go(PAGES_ROUTES.profile),
      },
      className: s.nav_link,
    });
    this.children.formMessage = new FormMessage({
      events: {
        submit: onSubmitForm,
      },
    });
  }

  render() {
    return this.compile(tmpl, { ...this.props, chats });
  }
}
