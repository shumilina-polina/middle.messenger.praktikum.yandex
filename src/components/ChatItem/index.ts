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
    return this.compile(tmpl, this.props);
  }
}
