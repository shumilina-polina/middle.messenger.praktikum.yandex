import Block from '@/core/Block';
import { tmplPopup } from './userAvatar.tmpl';
import { FormAvatar } from '../Forms/FormAvatar';
import { onSubmitAvatar } from '../Forms/form';

type PopupAvatarProps = {
  isVisible: boolean;
  chatAvatar?: number;
};

export class PopupAvatar extends Block {
  constructor(props: PopupAvatarProps) {
    super('div', {
      ...props,
      events: {
        click: (e: Event) => {
          if (e.target === e.currentTarget) {
            this.setProps({ isVisible: false });
          }
        },
      },
    });
  }

  init() {
    (this.getContent() as HTMLElement).classList.add('popup-wrapper');
    this.children.formAvatar = new FormAvatar({
      events: {
        submit: (e) => onSubmitAvatar(e, this.props.chatAvatar),
      },
    });
  }

  showPopup() {
    (this.getContent() as HTMLElement).classList.add('popup-wrapper-open');
  }
  hidePopup() {
    (this.getContent() as HTMLElement).classList.remove('popup-wrapper-open');
  }

  render() {
    this.props.isVisible ? this.showPopup() : this.hidePopup();
    return this.compile(tmplPopup, this.props);
  }
}
