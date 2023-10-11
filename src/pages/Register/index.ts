import Handlebars from 'handlebars';
import { tmpl } from './register.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { InputWrapper } from '@/components/InputWrapper';
import { BaseButton } from '@/components/BaseButton';
import { LinkForm } from '@/components/LinkForm';
import { PAGES_ROUTES } from '@/types/routes';

export const Register = () => {
  return Handlebars.compile(tmpl)({
    layoutTitle: LayoutTitle({ text: 'Регистрация' }),
    inputEmail: InputWrapper({
      label: 'Почта',
      input_id: 'register-email',
      input_type: 'email',
      input_name: 'email',
      is_required: true,
      minLenght: 1,
      maxLenght: 40,
      pattern: '.{1,}',
    }),
    inputLogin: InputWrapper({
      label: 'Логин',
      input_id: 'register-login',
      input_type: 'text',
      input_name: 'login',
      is_required: true,
      minLenght: 2,
      maxLenght: 40,
      pattern: '^[А-Яа-яЁёA-Za-zs-]+$',
    }),
    inputFirstName: InputWrapper({
      label: 'Имя',
      input_id: 'register-first-name',
      input_type: 'text',
      input_name: 'first_name',
      is_required: true,
      minLenght: 1,
      maxLenght: 30,
      pattern: '.{1,}',
    }),
    inputSecondName: InputWrapper({
      label: 'Фамилия',
      input_id: 'register-second-name',
      input_type: 'text',
      input_name: 'second_name',
      is_required: true,
      minLenght: 1,
      maxLenght: 30,
      pattern: '.{1,}',
    }),
    inputPhone: InputWrapper({
      label: 'Телефон',
      input_id: 'register-phone',
      input_type: 'phone',
      input_name: 'phone',
      is_required: true,
      minLenght: 11,
      maxLenght: 11,
      pattern: '.{1,}',
    }),
    inputPassword: InputWrapper({
      label: 'Пароль',
      input_id: 'register-password',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 2,
      maxLenght: 30,
      pattern: '.{1,}',
    }),
    inputDoublePassword: InputWrapper({
      label: 'Пароль (ещё раз)',
      input_id: 'register-password-double',
      input_type: 'password',
      input_name: 'password',
      is_required: true,
      minLenght: 2,
      maxLenght: 30,
      pattern: '.{1,}',
    }),
    createAccountButton: BaseButton({
      text: 'Создать аккаунт',
      type: 'submit',
    }),
    loginLink: LinkForm({ text: 'Войти', url: PAGES_ROUTES.login }),
  });
};
