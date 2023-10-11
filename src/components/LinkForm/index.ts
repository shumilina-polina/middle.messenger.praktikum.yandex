import { tmpl } from './linkForm.tmpl';
import Handlebars from 'handlebars';

export const LinkForm = (props) => {
  return Handlebars.compile(tmpl)(props);
};
