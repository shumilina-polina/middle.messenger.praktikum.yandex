import { Message } from './../../types/apiDataTypes';
import {
  AddUserToChatData,
  ChangeData,
  ChangePassword,
  CreateChatData,
  LoginData,
  RegisterData,
} from '../../types/apiDataTypes';
import { AuthController } from '@/controller/AuthController';
import { ChangeDataController } from '@/controller/ChangeDataController';
import { ChatWSController } from '@/controller/ChatWSController';
import { ChatsController } from '@/controller/ChatsController';
import { store } from '@/core/Store';
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
    case 'send-message':
      ChatWSController.sendMessage(data as Message);
      break;
    default:
      console.log('неизвестная форма');
      break;
  }
};

export const onSubmitAvatar = (e: SubmitEvent, chatAvatar = undefined) => {
  e.preventDefault();
  const inputFiles = Object.values(e.target as HTMLFormElement).find(
    (field) => field.tagName === 'INPUT'
  ).files;
  if (inputFiles.length > 0) {
    const formData = new FormData();
    formData.append('avatar', inputFiles[0]);
    console.log('файл аватара: ', inputFiles[0]);
    if (chatAvatar) {
      formData.append('chatId', chatAvatar);
      ChatsController.changeChatAvatar(formData as FormData);
    } else {
      ChangeDataController.changeAvatar(formData as FormData);
    }
  } else {
    alert('Необходимо загрузить файл');
  }
};

export const onSubmitUpdateUser = (
  e: SubmitEvent,
  isDelete: boolean = false
) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const { currentChat } = store.getState();
  let res: AddUserToChatData = {
    users: [],
    chatId: currentChat?.elemOptions.id,
  };
  let ids: Array<string> = [];
  Object.values(form).forEach((field) => {
    if (field.tagName === 'INPUT') {
      ids = field.value.split(' ');
    }
  });
  res.users = ids.map((elem: string) => Number(elem));
  isDelete
    ? ChatsController.deleteUsers(res, currentChat?.elemOptions)
    : ChatsController.addUsers(res, currentChat?.elemOptions);
  form.reset();
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
