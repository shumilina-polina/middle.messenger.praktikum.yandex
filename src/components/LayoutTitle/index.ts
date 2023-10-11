import { tmpl } from './layoutTitle.tmpl';
import Handlebars from 'handlebars';

type LayoutTitleProps = { text: string };

export const LayoutTitle = (props: LayoutTitleProps) => {
  return Handlebars.compile(tmpl)(props);
};
