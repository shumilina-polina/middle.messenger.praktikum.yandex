import { tmpl, tmplPasswordChange, tmplProfileChange } from './profile.tmpl';
import { BaseButton } from '@/components/BaseButton';
import { data, passwordInputs } from './testdata';
import { UserAvatar } from '@/components/UserAvatar';
import Block from '@/utils/Block';

const onClickAvatar = () => {
  const popupAvatar = document.querySelector('.popup-avatar');
  popupAvatar?.classList.add('popup-open');
  const onClick = (e: Event) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      popupAvatar?.classList.remove('popup-open');
      popupAvatar?.removeEventListener('click', onClick);
    }
  };
  popupAvatar?.addEventListener('click', onClick);
};

const avatarOptions = {
  imageUrl:
    'https://s.mediasole.ru/cache/content/data/images/2061/2061700/original.jpg',
  events: {
    click: onClickAvatar,
  },
};

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.avatar = new UserAvatar(avatarOptions);
  }
  render() {
    return this.compile(tmpl, { ...this.props, data });
  }
}

export class ProfileChangeData extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.avatar = new UserAvatar(avatarOptions);
    this.children.saveButton = new BaseButton({
      text: 'Сохранить',
      type: 'button',
    });
  }
  render() {
    return this.compile(tmplProfileChange, { ...this.props, data });
  }
}

export class ProfileChangePassword extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.avatar = new UserAvatar(avatarOptions);
    this.children.saveButton = new BaseButton({
      text: 'Сохранить',
      type: 'button',
    });
  }
  render() {
    return this.compile(tmplPasswordChange, { ...this.props, passwordInputs });
  }
}
