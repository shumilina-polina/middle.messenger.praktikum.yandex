import Block from '@/utils/Block';
import { tmpl } from './layoutTitle.tmpl';

type LayoutTitleProps = { text: string };

export class LayoutTitle extends Block {
  constructor(props: LayoutTitleProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
