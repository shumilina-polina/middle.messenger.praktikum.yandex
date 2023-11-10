import { State, withStore } from '@/core/Store';
import { tmpl } from './chatWindow.tmpl';
import Handlebars from 'handlebars';
import Block from '@/core/Block';

class BaseChatWindow extends Block {
  init() {
    Handlebars.registerHelper('isChatExists', function (value) {
      return value !== undefined;
    });
  }

  render() {
    if (this.props.currentChat) {
      console.log('this.props.currentChat: ', this);
      this.children.currentChat = this.props.currentChat;
    }
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: State) => ({
  currentChat: state.currentChat,
});

export const ChatWindow = withStore(mapStateToProps)(BaseChatWindow);
