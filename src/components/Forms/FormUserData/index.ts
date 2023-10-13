import Block from '@/utils/Block';
import { tmpl } from './formUserData.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import { INPUT_PATTERNS } from '@/types/patterns';
import s from './formUserData.module.scss';
import { BaseButton } from '@/components/BaseButton';

type FormUserDataProps = {
  disabled: boolean;
  changePassword?: boolean;
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormUserData extends Block {
  constructor(props: FormUserDataProps) {
    super('div', props);
  }

  init() {
    const { children, props } = this;
    if (props.changePassword) {
      children.inputOldPassword = new InputWrapper({
        input_id: 'profile-password-old',
        input_name: 'oldPassword',
        input_type: 'password',
        label: 'Старый пароль',
        placeholder: '',
        is_required: true,
        minLenght: 1,
        pattern: INPUT_PATTERNS.password,
      });
      children.inputNewPassword = new InputWrapper({
        input_id: 'profile-password-new',
        input_name: 'newPassword',
        input_type: 'password',
        label: 'Новый пароль',
        placeholder: '',
        is_required: true,
        minLenght: 1,
        pattern: INPUT_PATTERNS.password,
      });
      children.inputNewPasswordDouble = new InputWrapper({
        input_id: 'profile-password-new-double',
        input_name: 'newPassword',
        input_type: 'password',
        label: 'Повторите новый пароль',
        placeholder: '',
        is_required: true,
        minLenght: 1,
        pattern: INPUT_PATTERNS.password,
      });
    } else {
      children.inputEmail = new InputWrapper({
        class: props.disabled && s.disabled,
        input_id: 'user-email',
        input_type: 'email',
        input_name: 'email',
        label: 'Почта',
        placeholder: 'pochta@yandex.ru',
        is_required: true,
        minLenght: 1,
        pattern: INPUT_PATTERNS.email,
      });
      children.inputLogin = new InputWrapper({
        class: props.disabled && s.disabled,
        input_id: 'user-login',
        input_type: 'text',
        input_name: 'login',
        label: 'Логин',
        placeholder: 'polinashumilina',
        is_required: true,
        minLenght: 3,
        maxLenght: 20,
        pattern: INPUT_PATTERNS.login,
      });
      children.inputFirstName = new InputWrapper({
        class: props.disabled && s.disabled,
        input_id: 'user-first-name',
        input_type: 'text',
        input_name: 'first_name',
        label: 'Имя',
        placeholder: 'Полина',
        is_required: true,
        minLenght: 1,
        maxLenght: 30,
        pattern: INPUT_PATTERNS.name,
      });
      children.inputSecondName = new InputWrapper({
        class: props.disabled && s.disabled,
        input_id: 'user-second-name',
        input_type: 'text',
        input_name: 'second_name',
        label: 'Фамилия',
        placeholder: 'Шумилина',
        is_required: true,
        minLenght: 1,
        maxLenght: 30,
        pattern: INPUT_PATTERNS.name,
      });
      children.inputDisplayName = new InputWrapper({
        class: props.disabled && s.disabled,
        input_id: 'user-display-name',
        input_type: 'text',
        input_name: 'display_name',
        label: 'Имя в чате',
        placeholder: 'Полинка',
        is_required: true,
        minLenght: 1,
        maxLenght: 30,
        pattern: INPUT_PATTERNS.name,
      });
      children.inputPhone = new InputWrapper({
        class: props.disabled && s.disabled,
        input_id: 'user-phone',
        input_type: 'phone',
        input_name: 'phone',
        label: 'Телефон',
        placeholder: '+7 (909) 967-30-30',
        is_required: true,
        minLenght: 10,
        maxLenght: 15,
        pattern: INPUT_PATTERNS.phone,
      });
    }
    {
      props.disabled ||
        (children.saveButton = new BaseButton({
          text: 'Сохранить',
          type: 'submit',
        }));
    }
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
