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
};

export class InputWrapper extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
