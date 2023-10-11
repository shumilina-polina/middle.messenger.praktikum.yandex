import { Button } from '@/components/Button';
import Block from './Block';


export class HomePage extends Block {
  constructor() {
    super('div', { title: 'Home Page' });
  }

  init() {
    this.children.button = new Button({
      label: 'Кликни меня',
      events: { click: () => console.log('Click') },
    });
  }

  render() {
    return this.compile(
      `
      <h1>{{title}}</h1>
      {{{button}}}
    `,
      this.props
    );
  }
}
