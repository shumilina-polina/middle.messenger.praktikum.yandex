import { tmpl } from './userAvatar.tmpl';
import Handlebars from 'handlebars';

type UserAvatarProps = {
  imageUrl: string;
  changeButton: string;
  onClickAvatar: string;
};

export const UserAvatar = (props: UserAvatarProps) => {
  return Handlebars.compile(tmpl)(props);
};
