import { EventBus } from './../../utils/EventBus';
import { tmpl } from './register.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { InputWrapper } from '@/components/InputWrapper';
import { BaseButton } from '@/components/BaseButton';
import { LinkForm } from '@/components/LinkForm';
import { PAGES_ROUTES } from '@/types/routes';
import Block from '@/utils/Block';
import { INPUT_PATTERNS } from '@/types/patterns';

export class Register extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.layoutTitle = new LayoutTitle({ text: 'Регистрация' });
    this.children.inputEmail = new InputWrapper({
      label: 'Почта',
      input_id: 'register-email',
      // input_type: 'email',
      input_type: 'text',
      input_name: 'email',
      is_required: true,
      minLenght: 1,
      pattern: INPUT_PATTERNS.email,
    });
    this.children.inputLogin = new InputWrapper({
      label: 'Логин',
      input_id: 'register-login',
      input_type: 'text',
      input_name: 'login',
      is_required: true,
      minLenght: 2,
      maxLenght: 40,
      pattern: INPUT_PATTERNS.login,
    });
    this.children.inputFirstName = new InputWrapper({
      label: 'Имя',
      input_id: 'register-first-name',
      input_type: 'text',
      input_name: 'first_name',
      is_required: true,
      minLenght: 1,
      maxLenght: 30,
      pattern: INPUT_PATTERNS.name,
    });
    this.children.inputSecondName = new InputWrapper({
      label: 'Фамилия',
      input_id: 'register-second-name',
      input_type: 'text',
      input_name: 'second_name',
      is_required: true,
      minLenght: 1,
      maxLenght: 30,
      pattern: INPUT_PATTERNS.name,
    });
    this.children.inputPhone = new InputWrapper({
      label: 'Телефон',
      input_id: 'register-phone',
      input_type: 'phone',
      input_name: 'phone',
      is_required: true,
      minLenght: 10,
      maxLenght: 15,
      pattern: INPUT_PATTERNS.phone,
    });
    this.children.inputPassword = new InputWrapper({
      label: 'Пароль',
      input_id: 'register-password',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 2,
      maxLenght: 30,
      pattern: INPUT_PATTERNS.password,
    });
    this.children.inputDoublePassword = new InputWrapper({
      label: 'Пароль (ещё раз)',
      input_id: 'register-password-double',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 2,
      maxLenght: 30,
      pattern: INPUT_PATTERNS.password,
    });
    this.children.createAccountButton = new BaseButton({
      text: 'Создать аккаунт',
      type: 'submit',
    });
    this.children.loginLink = new LinkForm({
      text: 'Войти',
      url: PAGES_ROUTES.login,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
