import Block from '@/core/Block';
import { tmpl } from './formAvatar.tmpl';
import { BaseButton } from '@/components/BaseButton';

type FormAvatarProps = {
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormAvatar extends Block {
  constructor(props: FormAvatarProps) {
    super('div', props);
  }

  init() {
    this.children.changeButton = new BaseButton({
      text: 'Изменить',
      type: 'submit',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
