import Handlebars from 'handlebars';
import { tmpl, tmplProfileChange } from './profile.tmpl';
import { BaseButton } from '/src/components/BaseButton';
import { UserAvatar } from '/src/components/UserAvatar';
import { data } from './testdata.js';

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    avatar: UserAvatar({
      imageUrl:
        'https://s.mediasole.ru/cache/content/data/images/2061/2061700/original.jpg',
    }),
    data,
  });
};

export const ProfileChange = () => {
  return Handlebars.compile(tmplProfileChange)({
    avatar: UserAvatar({
      imageUrl:
        'https://s.mediasole.ru/cache/content/data/images/2061/2061700/original.jpg',
    }),
    data,
    saveButton: BaseButton({ text: 'Сохранить', type: 'button' }),
  });
};
