import { OldMessage } from './../../types/apiDataTypes';
import { State, store, withStore } from '@/core/Store';
import { tmpl } from './messages.tmpl';
import Block from '@/core/Block';
import { formatTime } from '@/utils/formatTime';

class BaseMessages extends Block {
  render() {
    const currentChat = this.props.currentChat;
    if (currentChat && currentChat.oldMessages) {
      const oldMessages = formatMessages(currentChat.oldMessages);
      return this.compile(tmpl, { ...this.props, oldMessages });
    }
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: State) => ({
  currentChat: state.currentChat,
});

export const Messages = withStore(mapStateToProps)(BaseMessages);

const formatMessages = (messages: Array<OldMessage>) => {
  const { user } = store.getState();
  messages.forEach((message) => {
    if ((message.time as string).length > 8) {
      message.time = formatTime(message.time as string);
    }
    message.isAdmin = Number(message.user_id) === user?.id;
  });
  return messages;
};
