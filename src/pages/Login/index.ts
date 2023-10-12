import { tmpl } from './login.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { LinkForm } from '@/components/LinkForm';
import { PAGES_ROUTES } from '@/types/routes';
import Block from '@/utils/Block';
import { FormLogin } from '@/components/Forms/FormLogin';
import { onSubmitForm } from '@/components/Forms/form';

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
    this.children.noAccountLink = new LinkForm({
      text: 'Нет аккаунта?',
      url: PAGES_ROUTES.register,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
