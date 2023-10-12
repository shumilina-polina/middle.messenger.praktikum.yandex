export const onSubmitForm = (e: SubmitEvent) => {
  e.preventDefault();

  const resultFormData: Record<string, string> = {};

  Object.values(e.target!).forEach((field) => {
    if (field.tagName === 'INPUT') resultFormData[field.name] = field.value;
  });

  console.log('Значение полей формы: ', resultFormData);
};

export const onFocusInput = (e: FocusEvent) => {
  console.log('focus');
};
