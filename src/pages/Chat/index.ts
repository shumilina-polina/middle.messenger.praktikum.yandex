import { tmpl } from './chat.tmpl';
import { chats } from './testdata';
import Block from '@/utils/Block';

export class Chat extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(tmpl, { ...this.props, chats });
  }
}
