import { tmpl } from './login.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { InputWrapper } from '@/components/InputWrapper';
import { LinkForm } from '@/components/LinkForm';
import { PAGES_ROUTES } from '@/types/routes';
import Block from '@/utils/Block';
import { BaseButton } from '@/components/BaseButton';

export class Login extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.layoutTitle = new LayoutTitle({ text: 'Вход' });
    this.children.inputLogin = new InputWrapper({
      label: 'Логин',
      input_id: 'login-name',
      input_type: 'text',
      input_name: 'login',
      is_required: true,
      minLenght: 2,
      maxLenght: 40,
      pattern: '^[А-Яа-яЁёA-Za-zs-]+$',
    });
    this.children.inputPassword = new InputWrapper({
      label: 'Пароль',
      input_id: 'login-password',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 2,
      maxLenght: 30,
      pattern: '.{1,}',
    });
    this.children.loginButton = new BaseButton({
      text: 'Войти',
      type: 'button',
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
