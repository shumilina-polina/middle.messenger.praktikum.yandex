import {
  ChangeData,
  ChangePassword,
  CreateChatData,
  LoginData,
  RegisterData,
} from '../../types/apiDataTypes';
import { AuthController } from '@/controller/AuthController';
import { ChangeDataController } from '@/controller/ChangeDataController';
import { ChatsController } from '@/controller/ChatsController';
import { PAGES_ROUTES } from '@/types/routes';

export const onSubmitForm = (e: SubmitEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const data = logFormData(form);

  switch (form.dataset.type) {
    case 'login':
      AuthController.login(data as LoginData);
      break;
    case 'register':
      AuthController.register(data as RegisterData);
      break;
    case 'user-change-data':
      ChangeDataController.changeData(data as ChangeData);
      break;
    case 'user-change-password':
      ChangeDataController.changePassword(data as ChangePassword);
      break;
    case 'create-chat':
      ChatsController.createChat(data as CreateChatData);
      break;
    default:
      console.log('неизвестная форма');
      break;
  }
};

export const onSubmitAvatar = (e: SubmitEvent) => {
  e.preventDefault();
  const inputFiles = Object.values(e.target as HTMLFormElement).find(
    (field) => field.tagName === 'INPUT'
  ).files;
  if (inputFiles.length > 0) {
    const formData = new FormData();
    formData.append('avatar', inputFiles[0]);
    console.log('файл аватара: ', inputFiles[0]);
    ChangeDataController.changeAvatar(formData as FormData);
  } else {
    alert('Необходимо загрузить файл');
  }
};

export const onFocusInput = (e: FocusEvent) => {
  (e.target as HTMLInputElement).reportValidity();
};

const logFormData = (form: HTMLFormElement) => {
  const resultForLog: Record<string, string> = {};
  const resultFormData: Record<string, string> = {};

  Object.values(form).forEach((field) => {
    if (field.tagName === 'INPUT') {
      resultForLog[field.name + ' (' + field.id + ')'] = field.value;
      resultFormData[field.name] = field.value;
    }
  });

  console.log('Значение полей формы: ', resultForLog);

  form.reset();
  return resultFormData;
};

export const checkPasswordMatching = (form: HTMLFormElement) => {
  const passwordInputs: NodeListOf<HTMLInputElement> = form.querySelectorAll(
    'input[type="password"]'
  );
  const isPageChangePassword =
    window.location.pathname === PAGES_ROUTES.profileChangePassword;

  const passwordsNotMatch = isPageChangePassword
    ? passwordInputs[1].value != passwordInputs[2].value
    : passwordInputs[0].value != passwordInputs[1].value;

  if (passwordsNotMatch) {
    alert('Пароли не совпадают');
    passwordInputs.forEach((input) => (input.value = ''));
    return false;
  }
  return true;
};
