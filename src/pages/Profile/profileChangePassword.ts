import { store } from '@/core/Store';
import Block from '@/core/Block';
import { backLink, setAvatar } from '.';
import { UserAvatar } from '@/components/UserAvatar';
import { FormUserData } from '@/components/Forms/FormUserData';
import { BaseButton } from '@/components/BaseButton';
import { checkPasswordMatching, onSubmitForm } from '@/components/Forms/form';
import { tmplChange } from './profile.tmpl';

class ProfileChangePassword extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    const { user } = store.getState();

    this.children.backLink = backLink;
    this.children.avatar = new UserAvatar(setAvatar(user?.avatar));
    this.children.formActive = new FormUserData({
      disabled: false,
      changePassword: true,
      events: {
        submit: (e) => {
          if (checkPasswordMatching(e.target as HTMLFormElement)) {
            onSubmitForm(e);
          }
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

export default ProfileChangePassword;
