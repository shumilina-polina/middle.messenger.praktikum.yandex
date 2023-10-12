import Block from '@/utils/Block';
import { tmpl } from './formLogin.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import { BaseButton } from '@/components/BaseButton';
import { onFocusInput } from '../form';
import { INPUT_PATTERNS } from '@/types/patterns';

type FormLoginProps = {
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormLogin extends Block {
  constructor(props: FormLoginProps) {
    super('div', props);
  }

  init() {
    this.children.inputLogin = new InputWrapper({
      label: 'Логин',
      input_id: 'login-name',
      input_type: 'text',
      input_name: 'login',
      is_required: true,
      minLenght: 3,
      maxLenght: 20,
      pattern: INPUT_PATTERNS.login,
      events: {
        focus: onFocusInput,
      },
    });
    this.children.inputPassword = new InputWrapper({
      label: 'Пароль',
      input_id: 'login-password',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 8,
      maxLenght: 40,
      pattern: INPUT_PATTERNS.password,
      events: {
        focus: onFocusInput,
      },
    });
    this.children.loginButton = new BaseButton({
      text: 'Войти',
      type: 'submit',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
