export const enum INPUT_PATTERNS {
  login = '((([0-9A-Za-z]|-|_)*[A-Za-z]+)|([A-Za-z]+([0-9A-Za-z]|-|_)+))+',
  password = '(?=.*[A-Z])(?=.*[0-9]).+',
  email = '(?=.*@[A-Za-z]+\\.)(@|[A-Za-z0-9]|-|_|\\.)+',
  name = '[A-ZА-ЯЁ]([A-Za-zА-ЯЁа-яё]|-)*',
  phone = '\\+?[0-9]+',
  addUser = '([0-9]|\\s)*',
  noPattern = '.{1,}',
}
