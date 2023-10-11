import Block from '@/utils/Block';
import { tmpl } from './baseButton.tmpl';

type BaseButtonProps = {
  text: string;
  type?: string;
  events?: {
    click: (e: Event) => void;
  };
};

export class BaseButton extends Block {
  constructor(props: BaseButtonProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
