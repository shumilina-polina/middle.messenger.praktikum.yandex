import { Chat } from '@/types/apiDataTypes';
import { tmpl } from './chatItem.tmpl';
import Block from '@/core/Block';
import Handlebars from 'handlebars';
import { ChatsController } from '@/controller/ChatsController';
import { formatTime } from '@/utils/formatTime';

export class ChatItem extends Block {
  constructor(props: Chat) {
    super('div', {
      ...props,
      events: {
        click: () => {
          ChatsController.fetchWSToken(this.props);
        },
      },
    });
  }

  init() {
    Handlebars.registerHelper('hasUnread', function (value) {
      return value > 0;
    });
  }

  render() {
    if (this.props.last_message) {
      const { content, time, user } = this.props.last_message;
      const userName = user.first_name;
      const formattedTime = formatTime(time);
      return this.compile(tmpl, {
        ...this.props,
        content,
        formattedTime,
        userName,
      });
    } else {
      return this.compile(tmpl, {
        ...this.props,
      });
    }
  }
}
