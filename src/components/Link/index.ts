import { tmpl } from './link.tmpl';
import Block from '@/core/Block';

type LinkProps = {
  text: string;
  className?: Record<string, string>;
  events?: {
    click: (e: Event) => void;
  };
};

export class Link extends Block {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
