import { State, store, withStore } from '@/core/Store';
import { tmpl } from './chatWindow.tmpl';
import Handlebars from 'handlebars';
import Block from '@/core/Block';
import { BaseButton } from '../BaseButton';
import { PopupAvatar } from '../UserAvatar/popupAvatar';
import { ChatsController } from '@/controller/ChatsController';
import { FormAddUser } from '../Forms/FormAddUser';
import { onSubmitAddUser } from '../Forms/form';

class BaseChatWindow extends Block {
  init() {
    Handlebars.registerHelper('isChatExists', function (value) {
      return value !== undefined;
    });
    this.children.addAvatarButton = new BaseButton({
      text: 'Обновить аватар',
      type: 'button',
      events: {
        click: () => {
          (this.children.popupAvatar as Block).setProps({
            isVisible: true,
          });
        },
      },
    });
    this.children.deleteChatButton = new BaseButton({
      text: 'Удалить чат',
      type: 'button',
      events: {
        click: () => {
          const allow = confirm(
            `Вы действительно хотите удалить чат ${this.props.currentChat.elemOptions.title}?`
          );
          if (allow) {
            ChatsController.deleteChat(this.props.currentChat.elemOptions.id);
          }
        },
      },
    });
    this.children.formAddUser = new FormAddUser({
      events: {
        submit: onSubmitAddUser,
      },
    });

    this.updateCurrentChatId();
  }

  updateCurrentChatId() {
    const { currentChat } = store.getState();
    this.children.popupAvatar = new PopupAvatar({
      isVisible: false,
      chatAvatar: currentChat?.elemOptions.id,
    });
  }

  render() {
    this.updateCurrentChatId();
    if (this.props.currentChat) {
      const { chatUsers, elemOptions } = this.props.currentChat;
      return this.compile(tmpl, {
        ...this.props,
        ...elemOptions,
        chatUsers,
      });
    }
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: State) => ({
  currentChat: state.currentChat,
});

export const ChatWindow = withStore(mapStateToProps)(BaseChatWindow);
