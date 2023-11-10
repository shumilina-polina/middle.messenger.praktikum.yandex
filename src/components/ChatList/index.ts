import Block from '@/core/Block';
import { Chat } from '@/types/apiDataTypes';
import { ChatItem } from '../ChatItem';
import { tmpl } from './chatlist.tmpl';
import { State, withStore } from '@/core/Store';

class BaseChatList extends Block {
  init() {
    this.updateChats();
  }

  updateChats() {
    this.children.chats = (this.props.chats ?? []).map(
      (e: Chat) => new ChatItem(e)
    );
  }

  render() {
    if (this.props.chats) {
      this.updateChats();
    }
    return this.compile(tmpl, this.props.chats);
  }
}

function mapStateToProps(state: State) {
  return { chats: state.chats };
}

export const ChatList = withStore(mapStateToProps)(BaseChatList);
