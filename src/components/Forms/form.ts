import { LoginData, RegisterData } from '../../types/apiDataTypes';
import { AuthController } from '@/controller/AuthController';
import { PAGES_ROUTES } from '@/types/routes';

export const onSubmitForm = (e: SubmitEvent) => {
  e.preventDefault();
  const data = logFormData(e.target as HTMLFormElement);
  if ((e.target as HTMLFormElement).dataset.type === 'login') {
    AuthController.login(data as LoginData);
  } else if ((e.target as HTMLFormElement).dataset.type === 'register') {
    AuthController.register(data as RegisterData);
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
  }
};
