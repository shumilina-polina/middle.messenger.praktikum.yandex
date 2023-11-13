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
          (this.children.popupAvatar as Block).setProps({
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
    if (window.location.pathname === '/profile') {
      this.setProps({ disabled: 'disabled_avatar' });
    }
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
