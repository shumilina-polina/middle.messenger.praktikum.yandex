import { State, store, withStore } from '@/core/Store';
import { tmpl } from './chatWindow.tmpl';
import Handlebars from 'handlebars';
import Block from '@/core/Block';
import { BaseButton } from '../BaseButton';
import { PopupAvatar } from '../UserAvatar/popupAvatar';

class BaseChatWindow extends Block {
  init() {
    Handlebars.registerHelper('isChatExists', function (value) {
      return value !== undefined;
    });
    this.children.addAvatarButton = new BaseButton({
      text: 'Добавить аватар',
      type: 'button',
      events: {
        click: () => {
          (this.children.popupAvatar as Block).setProps({
            isVisible: true,
          });
        },
      },
    });

    this.updateCurrentChatId();
  }

  updateCurrentChatId() {
    const { currentChat } = store.getState();
    this.children.popupAvatar = new PopupAvatar({
      isVisible: false,
      chatAvatar: currentChat?.id,
    });
  }

  render() {
    this.updateCurrentChatId();
    if (this.props.currentChat) {
      return this.compile(tmpl, {
        ...this.props,
        ...this.props.currentChat.props,
      });
    }
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: State) => ({
  currentChat: state.currentChat,
});

export const ChatWindow = withStore(mapStateToProps)(BaseChatWindow);
