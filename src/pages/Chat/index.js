import Handlebars from 'handlebars';
import { tmpl } from './chat.tmpl';
import { chats } from './testdata';

export const Chat = () => {
  return Handlebars.compile(tmpl)({
    chats,
  });
};
