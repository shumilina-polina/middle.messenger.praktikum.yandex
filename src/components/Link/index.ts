import { PAGES_ROUTES } from '@/types/routes';
import { tmpl } from './link.tmpl';
import Block from '@/utils/Block';
import Router from '@/utils/Router';

type LinkProps = {
  text: string;
  url: PAGES_ROUTES;
  className: Record<string, string>;
};

export class Link extends Block {
  constructor(props: LinkProps) {
    super('div', {
      ...props,
      events: {
        click: () => Router.go(props.url),
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
