import { tmpl } from './inputWrapper.tmpl';
import Handlebars from 'handlebars';

export const InputWrapper = (props) => {
  return Handlebars.compile(tmpl)(props);
};
