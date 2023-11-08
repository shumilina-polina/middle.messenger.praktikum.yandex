import { State, store, withStore } from '@/core/Store';
import Block from '@/core/Block';
import { backLink, setAvatar } from '.';
import { UserAvatar } from '@/components/UserAvatar';
import { FormUserData } from '@/components/Forms/FormUserData';
import { BaseButton } from '@/components/BaseButton';
import { onSubmitForm } from '@/components/Forms/form';
import { tmplChange } from './profile.tmpl';

class BaseProfileChangeData extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    const { user } = store.getState();

    this.children.backLink = backLink;
    this.children.avatar = new UserAvatar(setAvatar(user?.avatar));

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

const mapStateToProps = (state: State) => ({
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  display_name: state.user?.display_name,
  login: state.user?.login,
  phone: state.user?.phone,
  email: state.user?.email,
});

export const ProfileChangeData = withStore(mapStateToProps)(
  BaseProfileChangeData
);
