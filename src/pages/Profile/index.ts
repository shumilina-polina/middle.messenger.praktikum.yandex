import { tmpl } from './profile.tmpl';
import { UserAvatar } from '@/components/UserAvatar';
import Block from '@/core/Block';
import { FormUserData } from '@/components/Forms/FormUserData';
import { Link } from '@/components/Link';
import { PAGES_ROUTES } from '@/types/routes';
import s from './profile.module.scss';
import Router from '@/core/Router';
import { AuthController } from '@/controller/AuthController';
import { State, store, withStore } from '@/core/Store';
import { HTTPTransport } from '@/core/HTTPTransport';
import { ENDPOINTS } from '@/types/endpoints';

export const setAvatar = (avatar: string | undefined) => ({
  imageUrl: HTTPTransport.API_URL + ENDPOINTS.resources + avatar || '',
});

class BaseProfile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    const { user } = store.getState();
    this.setProps({ userName: user?.first_name + ' ' + user?.second_name });
    this.children.logoutLink = new Link({
      text: 'Выйти',
      className: s.links_item__link_logout,
      events: {
        click: () => {
          AuthController.logout();
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
    this.children.avatar = new UserAvatar(setAvatar(user?.avatar));
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

export const backLink = new Link({
  text: '',
  events: {
    click: () => Router.go(PAGES_ROUTES.chat),
  },
  className: s.prev_link,
});

const mapStateToProps = (state: State) => ({
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  display_name: state.user?.display_name,
  login: state.user?.login,
  phone: state.user?.phone,
  email: state.user?.email,
});

export const Profile = withStore(mapStateToProps)(BaseProfile);
