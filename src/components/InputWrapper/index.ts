import { tmpl } from './inputWrapper.tmpl';
import Handlebars from 'handlebars';

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

export const InputWrapper = (props: InputProps) => {
  return Handlebars.compile(tmpl)(props);
};
