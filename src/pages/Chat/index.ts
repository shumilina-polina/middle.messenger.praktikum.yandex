import { FormMessage } from '@/components/Forms/FormMessage';
import { tmpl } from './chat.tmpl';
import { chats } from './testdata';
import Block from '@/utils/Block';
import { onSubmitForm } from '@/components/Forms/form';

export class Chat extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.formMessage = new FormMessage({
      events: {
        submit: onSubmitForm,
      },
    });
  }

  render() {
    return this.compile(tmpl, { ...this.props, chats });
  }
}
