import Handlebars from 'handlebars';
import { tmplNotFound, tmplServerError } from './notFound.tmpl';
import { LayoutTitle } from '@/components/LayoutTitle';
import { LinkForm } from '@/components/LinkForm';

export const NotFound = () => {
  return Handlebars.compile(tmplNotFound)({
    layoutTitle: LayoutTitle({ text: '404' }),
    BackLink: LinkForm({ text: 'Назад к чатам', url: '/chat' }),
  });
};

export const ServerError = () => {
  return Handlebars.compile(tmplServerError)({
    layoutTitle: LayoutTitle({ text: '500' }),
    BackLink: LinkForm({ text: 'Назад к чатам', url: '/chat' }),
  });
};
