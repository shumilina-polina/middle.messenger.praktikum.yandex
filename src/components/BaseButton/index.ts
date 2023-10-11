import { tmpl } from './baseButton.tmpl';
import Handlebars from 'handlebars';

export type BaseButtonProps = {
  text: string;
  type?: string;
  onClickButton?: string;
};

export const BaseButton = (props: BaseButtonProps) => {
  return Handlebars.compile(tmpl)(props);
};
