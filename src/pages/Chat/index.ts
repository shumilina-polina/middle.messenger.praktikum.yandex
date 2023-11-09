import { FormMessage } from '@/components/Forms/FormMessage';
import { tmpl } from './chat.tmpl';
import Block from '@/core/Block';
import { onSubmitForm } from '@/components/Forms/form';
import { Link } from '@/components/Link';
import { PAGES_ROUTES } from '@/types/routes';
import s from './chat.module.scss';
import Router from '@/core/Router';
import { State, store, withStore } from '@/core/Store';
import { FormCreateChat } from '@/components/Forms/FormCreateChat';
import { ChatsController } from '@/controller/ChatsController';
import { ChatItem } from '@/components/ChatItem';
import { Chat as ChatType } from '@/types/apiDataTypes';

class BaseChat extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    const { chats } = store.getState();
    this.setProps({ chatsArray: chats });

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
          // this.setProps({ chatsArray: [{ title: 'boo' }] });
          onSubmitForm(e);
        },
      },
    });
    this.children.chatlist = this.props.chatsArray.map(
      (chat: ChatType) => new ChatItem(chat)
    );
  }

  componentDidMount(): void {
    ChatsController.fetchChats();
  }

  render() {
    // this.children.chatlist = this.props.chatsArray.map(
    //   (chat: ChatType) => new ChatItem(chat)
    // );
    // console.log('this.children: ', this.children.chatlist);
    // console.log('this.props: ', this.props.chatsArray);
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: State) => ({ ...state.chats });

export const Chat = withStore(mapStateToProps)(BaseChat);
