import Block from '@/utils/Block';
import { tmpl } from './formMessage.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import s from './formMessage.module.scss';
import { INPUT_PATTERNS } from '@/types/patterns';

type FormMessageProps = {
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormMessage extends Block {
  constructor(props: FormMessageProps) {
    super('div', props);
  }

  init() {
    this.children.inputMessage = new InputWrapper({
      class: s.input,
      placeholder: 'Сообщение',
      label: 'Сообщение',
      input_id: 'feed-text',
      input_type: 'text',
      input_name: 'message',
      is_required: true,
      minLenght: 1,
      pattern: INPUT_PATTERNS.noPattern,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
