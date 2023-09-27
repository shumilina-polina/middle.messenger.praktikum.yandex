import { tmpl } from './userAvatar.tmpl';
import Handlebars from 'handlebars';

export const UserAvatar = (props) => {
  return Handlebars.compile(tmpl)(props);
};
