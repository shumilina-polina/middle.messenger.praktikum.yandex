import { tmpl, tmplChange } from './profile.tmpl';
import { BaseButton } from '@/components/BaseButton';
import { UserAvatar } from '@/components/UserAvatar';
import Block from '@/core/Block';
import { FormUserData } from '@/components/Forms/FormUserData';
import { checkPasswordMatching, onSubmitForm } from '@/components/Forms/form';
import { Link } from '@/components/Link';
import { PAGES_ROUTES } from '@/types/routes';
import s from './profile.module.scss';
import Router from '@/core/Router';
import { AuthController } from '@/controller/AuthController';

const avatarOptions = {
  imageUrl:
    'https://s.mediasole.ru/cache/content/data/images/2061/2061700/original.jpg',
};

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.logoutLink = new Link({
      text: 'Выйти',
      className: s.links_item__link_logout,
      events: {
        click: () => {
          AuthController.logout();
          Router.go(PAGES_ROUTES.login);
        },
      },
    });

    this.children.changeDataLink = new Link({
      text: 'Изменить данные',
      events: {
        click: () => Router.go(PAGES_ROUTES.profileChangeData),
      },
    });

    this.children.changePasswordLink = new Link({
      text: 'Изменить пароль',
      events: {
        click: () => Router.go(PAGES_ROUTES.profileChangePassword),
      },
    });

    this.children.backLink = backLink;
    this.children.avatar = new UserAvatar(avatarOptions);
    this.children.formDisabled = new FormUserData({
      disabled: true,
    });
  }

  componentDidMount(): void {
    AuthController.fetchUser();
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
    this.children.backLink = backLink;
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
    this.children.backLink = backLink;
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

const backLink = new Link({
  text: '',
  events: {
    click: () => Router.go(PAGES_ROUTES.chat),
  },
  className: s.prev_link,
});
