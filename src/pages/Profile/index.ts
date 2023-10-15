import { tmpl, tmplChange } from './profile.tmpl';
import { BaseButton } from '@/components/BaseButton';
import { UserAvatar } from '@/components/UserAvatar';
import Block from '@/utils/Block';
import { FormUserData } from '@/components/Forms/FormUserData';
import { checkPasswordMatching, onSubmitForm } from '@/components/Forms/form';

const avatarOptions = {
  imageUrl:
    'https://s.mediasole.ru/cache/content/data/images/2061/2061700/original.jpg',
};

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.avatar = new UserAvatar(avatarOptions);
    this.children.formDisabled = new FormUserData({
      disabled: true,
    });
  }
  render() {
    return this.compile(tmpl, this.props);
  }
}

export class ProfileChangeData extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.avatar = new UserAvatar(avatarOptions);
    this.children.formActive = new FormUserData({
      events: {
        submit: onSubmitForm,
      },
      disabled: false,
    });
    this.children.saveButton = new BaseButton({
      text: 'Сохранить',
      type: 'button',
    });
  }
  render() {
    return this.compile(tmplChange, this.props);
  }
}

export class ProfileChangePassword extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.avatar = new UserAvatar(avatarOptions);
    this.children.formActive = new FormUserData({
      disabled: false,
      changePassword: true,
      events: {
        submit: (e) => {
          checkPasswordMatching(e.target as HTMLFormElement);
          onSubmitForm(e);
        },
      },
    });
    this.children.saveButton = new BaseButton({
      text: 'Сохранить',
      type: 'button',
    });
  }
  render() {
    return this.compile(tmplChange, this.props);
  }
}
