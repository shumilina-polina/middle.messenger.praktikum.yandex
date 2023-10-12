import Block from '@/utils/Block';
import { tmpl } from './inputWrapper.tmpl';

type InputProps = {
  label: string;
  input_id: string;
  input_type: string;
  input_name: string;
  is_required: boolean;
  minLenght?: number;
  maxLenght?: number;
  pattern: string;
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
