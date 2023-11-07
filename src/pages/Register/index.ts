import { tmpl } from './register.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { Link } from '@/components/Link';
import { PAGES_ROUTES } from '@/types/routes';
import Block from '@/utils/Block';
import { checkPasswordMatching, onSubmitForm } from '@/components/Forms/form';
import { FormRegister } from '@/components/Forms/FormRegister';

export class Register extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.formRegister = new FormRegister({
      events: {
        submit: (e) => {
          checkPasswordMatching(e.target as HTMLFormElement);
          onSubmitForm(e);
        },
      },
    });
    this.children.layoutTitle = new LayoutTitle({ text: 'Регистрация' });

    this.children.loginLink = new Link({
      text: 'Войти',
      url: PAGES_ROUTES.chat,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
