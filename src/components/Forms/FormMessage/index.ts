import Block from '@/core/Block';
import { tmpl } from './formMessage.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import s from './formMessage.module.scss';
import { INPUT_PATTERNS } from '@/types/patterns';
import { BaseButton } from '@/components/BaseButton';
import { onSubmitForm } from '../form';
import { State, store, withStore } from '@/core/Store';

class BaseFormMessage extends Block {
  constructor(props: any) {
    super('div', {
      ...props,
      events: {
        submit: onSubmitForm,
      },
    });
  }

  init() {
    this.children.inputMessage = new InputWrapper({
      class: s.input,
      placeholder: 'Сообщение',
      label: 'Сообщение',
      input_id: 'feed-text',
      input_type: 'text',
      input_name: 'content',
      is_required: true,
      minLenght: 1,
      pattern: INPUT_PATTERNS.noPattern,
    });
    this.children.sendButton = new BaseButton({
      text: '',
      type: 'submit',
    });
  }

  render() {
    const { currentChat } = store.getState();
    let disabled_class = '';
    if (!currentChat) {
      disabled_class = 'disabled_form';
    }

    return this.compile(tmpl, { ...this.props, disabled_class });
  }
}

const mapStateToProps = (state: State) => ({
  currentChat: state.currentChat,
});

export const FormMessage = withStore(mapStateToProps)(BaseFormMessage);
