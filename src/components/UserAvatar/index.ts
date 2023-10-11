import Block from '@/utils/Block';
import { tmpl } from './userAvatar.tmpl';
import { BaseButton } from '../BaseButton';

type UserAvatarProps = {
  imageUrl: string;
  events?: {
    click: () => void;
  };
};

export class UserAvatar extends Block {
  constructor(props: UserAvatarProps) {
    super('div', props);
  }

  init() {
    this.children.changeButton = new BaseButton({
      text: 'Изменить',
      type: 'button',
      events: {
        click: onClickButton,
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

const onClickButton = (e: Event) => {
  e.stopPropagation();
  const popupAvatar = document.querySelector('.popup-avatar');
  popupAvatar?.classList.remove('popup-open');
};
