import Block from '@/core/Block';
import { tmpl } from './userAvatar.tmpl';
import { PopupAvatar } from './popupAvatar';

type UserAvatarProps = {
  imageUrl: string;
};

export class UserAvatar extends Block {
  constructor(props: UserAvatarProps) {
    super('div', {
      ...props,
      events: {
        click: () => {
          this.children.popupAvatar.setProps({
            isVisible: true,
          });
        },
      },
    });
  }

  init() {
    this.children.popupAvatar = new PopupAvatar({
      isVisible: false,
    });
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('button')?.addEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('button')?.removeEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
