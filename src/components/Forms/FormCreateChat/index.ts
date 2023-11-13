import Block from '@/core/Block';
import { tmpl } from './formCreateChat.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import s from './formCreateChat.module.scss';
import { INPUT_PATTERNS } from '@/types/patterns';
import { BaseButton } from '@/components/BaseButton';

type FormChat = {
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormCreateChat extends Block {
  constructor(props: FormChat) {
    super('div', props);
  }

  init() {
    this.children.inputCreateChat = new InputWrapper({
      class: s.input,
      placeholder: 'Название',
      input_id: 'feed-create-chat',
      input_type: 'text',
      input_name: 'title',
      is_required: true,
      minLenght: 1,
      pattern: INPUT_PATTERNS.noPattern,
    });
    this.children.createButton = new BaseButton({
      text: '',
      type: 'submit',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
