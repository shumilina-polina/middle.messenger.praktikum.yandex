import { tmpl } from './login.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { PAGES_ROUTES } from '@/types/routes';
import Block from '@/core/Block';
import { FormLogin } from '@/components/Forms/FormLogin';
import { onSubmitForm } from '@/components/Forms/form';
import { Link } from '@/components/Link';
import Router from '@/core/Router';

export class Login extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.layoutTitle = new LayoutTitle({ text: 'Вход' });
    this.children.formLogin = new FormLogin({
      events: {
        submit: onSubmitForm,
      },
    });
    this.children.noAccountLink = new Link({
      text: 'Нет аккаунта?',
      events: {
        click: () => Router.go(PAGES_ROUTES.register),
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
