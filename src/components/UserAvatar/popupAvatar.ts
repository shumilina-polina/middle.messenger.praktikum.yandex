import Block from '@/core/Block';
import { tmplPopup } from './userAvatar.tmpl';
import { BaseButton } from '../BaseButton';

type PopupAvatarProps = {
  isVisible: boolean;
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
    this.getContent()?.classList.add('popup-wrapper');
    this.children.changeButton = new BaseButton({
      text: 'Изменить',
      type: 'button',
      events: {
        click: () => this.setProps({ isVisible: false }),
      },
    });
  }

  showPopup() {
    this.getContent()!.classList.add('popup-wrapper-open');
  }
  hidePopup() {
    this.getContent()!.classList.remove('popup-wrapper-open');
  }

  render() {
    this.props.isVisible ? this.showPopup() : this.hidePopup();
    return this.compile(tmplPopup, this.props);
  }
}
