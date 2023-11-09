import { Chat } from '@/types/apiDataTypes';
import { tmpl } from './chatItem.tmpl';
import Block from '@/core/Block';
import { store } from '@/core/Store';

export class ChatItem extends Block {
  constructor(props: Chat) {
    super('div', {
      ...props,
      events: {
        click: () => {
          store.set('currentChat', this.props.id);
          console.log('Выбранный чат: ', this.props.id);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
