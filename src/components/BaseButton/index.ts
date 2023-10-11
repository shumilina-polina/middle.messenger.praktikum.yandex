import { tmpl } from './baseButton.tmpl';
import Handlebars from 'handlebars';

export const BaseButton = (props) => {
  return Handlebars.compile(tmpl)(props);
};
