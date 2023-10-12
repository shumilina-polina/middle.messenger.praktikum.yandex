import Block from '@/utils/Block';
import { tmpl } from './inputWrapper.tmpl';
import { INPUT_PATTERNS } from '@/types/patterns';

type InputProps = {
  label: string;
  input_id: string;
  input_type: string;
  input_name: string;
  is_required: boolean;
  minLenght?: number;
  maxLenght?: number;
  pattern?: INPUT_PATTERNS;
  events?: {
    focus?: (e: FocusEvent) => void;
    blur?: (e: Event) => void;
  };
};

export class InputWrapper extends Block {
  constructor(props: InputProps) {
    super('div', props);
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

  render() {
    return this.compile(tmpl, this.props);
  }
}
