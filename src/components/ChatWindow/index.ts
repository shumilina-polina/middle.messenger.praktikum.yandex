import { State, store, withStore } from '@/core/Store';
import { tmpl } from './chatWindow.tmpl';
import Handlebars from 'handlebars';
import Block from '@/core/Block';
import { BaseButton } from '../BaseButton';
import { PopupAvatar } from '../UserAvatar/popupAvatar';
import { ChatsController } from '@/controller/ChatsController';
import { onSubmitUpdateUser } from '../Forms/form';
import { FormUpdateUsers } from '../Forms/FormUpdateUser';

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
    this.children.formAddUsers = new FormUpdateUsers({
      label: 'Добавить участников:',
      events: {
        submit: onSubmitUpdateUser,
      },
    });
    this.children.formDeleteUsers = new FormUpdateUsers({
      label: 'Удалить участников:',
      events: {
        submit: (e) => onSubmitUpdateUser(e, true),
      },
    });

    this.updateCurrentChatId();
  }

  updateCurrentChatId() {
    const { currentChat } = store.getState();
    this.children.popupAvatar = new PopupAvatar({
      isVisible: false,
      chatAvatar: currentChat?.elemOptions?.id,
    });
  }

  render() {
    this.updateCurrentChatId();
    if (this.props.currentChat) {
      const { chatUsers, elemOptions, oldMessages } = this.props.currentChat;
      return this.compile(tmpl, {
        ...this.props,
        ...elemOptions,
        chatUsers,
        oldMessages,
      });
    }
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: State) => ({
  currentChat: state.currentChat,
});

export const ChatWindow = withStore(mapStateToProps)(BaseChatWindow);
