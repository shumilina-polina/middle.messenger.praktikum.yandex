import { Chat } from '@/types/apiDataTypes';
import { tmpl } from './chatItem.tmpl';
import Block from '@/core/Block';
import { store } from '@/core/Store';
import Handlebars from 'handlebars';

export class ChatItem extends Block {
  constructor(props: Chat) {
    super('div', {
      ...props,
      events: {
        click: () => {
          store.set('currentChat', { elem: this, id: this.props.id });
          console.log('Выбранный чат: ', this.props.title);
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
