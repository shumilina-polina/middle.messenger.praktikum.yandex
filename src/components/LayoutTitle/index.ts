import { tmpl } from './layoutTitle.tmpl';
import Handlebars from 'handlebars';

export const LayoutTitle = (props) => {
  return Handlebars.compile(tmpl)(props);
};
