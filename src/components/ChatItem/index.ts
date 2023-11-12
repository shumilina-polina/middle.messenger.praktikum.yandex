import { Chat } from '@/types/apiDataTypes';
import { tmpl } from './chatItem.tmpl';
import Block from '@/core/Block';
import Handlebars from 'handlebars';
import { ChatsController } from '@/controller/ChatsController';

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
    const { content, time, user } = this.props.last_message;
    const userName = user.first_name;
    const formattedTime = formatTime(time);
    return this.compile(tmpl, {
      ...this.props,
      content,
      formattedTime,
      userName,
    });
  }
}

const formatTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const isToday = +Date.now() - +date < 1000 * 60 * 60 * 24;
  if (isToday) {
    return `${date.getHours()}:${date.getMinutes()}`;
  } else {
    return (
      `${date.getDate()}.${date.getMonth() + 1}.` +
      `${date.getFullYear()}`.slice(2)
    );
  }
};
