import { PAGES_ROUTES } from '@/types/routes';
import { tmpl } from './linkForm.tmpl';
import Block from '@/utils/Block';

type LinkFormProps = { text: string; url: PAGES_ROUTES };

export class LinkForm extends Block {
  constructor(props: LinkFormProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
