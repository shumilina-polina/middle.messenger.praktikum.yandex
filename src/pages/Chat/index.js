import Handlebars from 'handlebars';
import { tmpl } from './chat.tmpl';

export const Chat = () => {
  return Handlebars.compile(tmpl)();
};
