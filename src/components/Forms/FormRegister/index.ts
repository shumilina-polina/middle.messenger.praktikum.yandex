import Block from '@/core/Block';
import { tmpl } from './formRegister.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import { BaseButton } from '@/components/BaseButton';
import { INPUT_PATTERNS } from '@/types/patterns';

type FormRegisterProps = {
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormRegister extends Block {
  constructor(props: FormRegisterProps) {
    super('div', props);
  }

  init() {
    this.children.inputEmail = new InputWrapper({
      label: 'Почта',
      input_id: 'register-email',
      placeholder: 'Почта',
      // input_type: 'email',
      input_type: 'text',
      input_name: 'email',
      is_required: true,
      minLenght: 1,
      pattern: INPUT_PATTERNS.email,
    });
    this.children.inputLogin = new InputWrapper({
      label: 'Логин',
      placeholder: 'Логин',
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
      placeholder: 'Имя',
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
      placeholder: 'Фамилия',
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
      placeholder: 'Телефон',
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
      placeholder: 'Пароль',
      input_id: 'register-password',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 8,
      maxLenght: 40,
      pattern: INPUT_PATTERNS.password,
    });
    this.children.inputDoublePassword = new InputWrapper({
      label: 'Пароль (ещё раз)',
      placeholder: 'Пароль (ещё раз)',
      input_id: 'register-password-double',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 8,
      maxLenght: 40,
      pattern: INPUT_PATTERNS.password,
    });

    this.children.createAccountButton = new BaseButton({
      text: 'Создать аккаунт',
      type: 'submit',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
