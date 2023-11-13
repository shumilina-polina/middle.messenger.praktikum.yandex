import { ChatList } from '@/components/ChatList';
import { FormMessage } from '@/components/Forms/FormMessage';
import { tmpl } from './chat.tmpl';
import Block from '@/core/Block';
import { onSubmitForm } from '@/components/Forms/form';
import { Link } from '@/components/Link';
import { PAGES_ROUTES } from '@/types/routes';
import s from './chat.module.scss';
import Router from '@/core/Router';
import { State, withStore } from '@/core/Store';
import { FormCreateChat } from '@/components/Forms/FormCreateChat';
import { ChatsController } from '@/controller/ChatsController';
import { ChatWindow } from '@/components/ChatWindow';

class BaseChat extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.profileLink = new Link({
      text: 'Профиль >',
      events: {
        click: () => Router.go(PAGES_ROUTES.profile),
      },
      className: s.nav_link,
    });
    this.children.formMessage = new FormMessage({
      events: {
        submit: onSubmitForm,
      },
    });
    this.children.formCreateChat = new FormCreateChat({
      events: {
        submit: (e) => {
          onSubmitForm(e);
        },
      },
    });
    this.children.chatWindow = new ChatWindow({});
    this.children.chatLists = new ChatList({});
  }

  componentDidMount(): void {
    ChatsController.fetchChats();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: State) => ({
  ...state.chats,
});

export const Chat = withStore(mapStateToProps)(BaseChat);
