import Block from '@/core/Block';
import { tmpl } from './inputWrapper.tmpl';
import { INPUT_PATTERNS } from '@/types/patterns';
import { onFocusInput } from '../Forms/form';

type InputProps = {
  class?: string;
  label?: string;
  input_id: string;
  input_type: string;
  input_name: string;
  is_required: boolean;
  minLenght?: number;
  maxLenght?: number;
  pattern?: INPUT_PATTERNS;
  placeholder?: string;
  value?: string;
};

export class InputWrapper extends Block {
  constructor(props: InputProps) {
    super('div', {
      ...props,
      events: {
        focus: onFocusInput,
      },
    });
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('input')?.addEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('input')?.removeEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
