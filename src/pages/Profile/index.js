import Handlebars from 'handlebars';
import { tmpl, tmplPasswordChange, tmplProfileChange } from './profile.tmpl';
import { BaseButton } from '/src/components/BaseButton';
import { UserAvatar } from '/src/components/UserAvatar';
import { data, passwordInputs } from './testdata.js';
const ha = (e) => {
  console.log(e);
};

const avatarOptions = UserAvatar({
  imageUrl:
    'https://s.mediasole.ru/cache/content/data/images/2061/2061700/original.jpg',
  changeButton: BaseButton({
    text: 'Изменить',
    type: 'button',
    onClickButton:
      'const popupAvatar = document.querySelector(".popup-avatar"); popupAvatar.classList.remove("popup-open");',
  }),
  onClickAvatar:
    'const popupAvatar = document.querySelector(".popup-avatar"); popupAvatar.classList.add("popup-open"); popupAvatar.addEventListener("click", (e) => {if (e.target === e.currentTarget) { popupAvatar.classList.remove("popup-open") };});',
});

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    avatar: avatarOptions,
    data,
  });
};

export const ProfileChangeData = () => {
  return Handlebars.compile(tmplProfileChange)({
    avatar: avatarOptions,
    data,
    saveButton: BaseButton({ text: 'Сохранить', type: 'button' }),
  });
};

export const ProfileChangePassword = () => {
  return Handlebars.compile(tmplPasswordChange)({
    avatar: avatarOptions,
    passwordInputs,
    saveButton: BaseButton({ text: 'Сохранить', type: 'button' }),
  });
};
