import { PAGES_ROUTES } from '@/types/routes';

export const onSubmitForm = (e: SubmitEvent) => {
  e.preventDefault();
  logFormData(e.target as HTMLFormElement);
};

export const onFocusInput = (e: FocusEvent) => {
  (e.target as HTMLInputElement).reportValidity();
};

const logFormData = (form: HTMLFormElement) => {
  const resultFormData: Record<string, string> = {};

  Object.values(form).forEach((field) => {
    if (field.tagName === 'INPUT')
      resultFormData[field.name + ' (' + field.id + ')'] = field.value;
  });

  console.log('Значение полей формы: ', resultFormData);
  form.reset();
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
