import Handlebars from 'handlebars';
import { tmpl } from './login.tmpl';
import { LayoutTitle } from '/src/components/LayoutTitle';
import { InputWrapper } from '/src/components/InputWrapper';
import { BaseButton } from '/src/components/BaseButton';
import { LinkForm } from '/src/components/LinkForm';

export const Login = () => {
  return Handlebars.compile(tmpl)({
    layoutTitle: LayoutTitle({ text: 'Вход' }),
    inputLogin: InputWrapper({
      label: 'Логин',
      input_id: 'login-name',
      input_type: 'text',
      input_name: 'login',
      is_required: true,
      minLenght: 2,
      maxLenght: 40,
      pattern: '^[А-Яа-яЁёA-Za-zs-]+$',
    }),
    inputPassword: InputWrapper({
      label: 'Пароль',
      input_id: 'login-password',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 2,
      maxLenght: 30,
      pattern: '.{1,}',
    }),
    loginButton: BaseButton({ text: 'Войти', type: 'button' }),
    noAccountLink: LinkForm({ text: 'Нет аккаунта?', url: '/register' }),
  });
};
