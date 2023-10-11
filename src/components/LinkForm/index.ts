import { PAGES_ROUTES } from '@/types/routes';
import { tmpl } from './linkForm.tmpl';
import Handlebars from 'handlebars';

type LinkFormProps = { text: string; url: PAGES_ROUTES };

export const LinkForm = (props: LinkFormProps) => {
  return Handlebars.compile(tmpl)(props);
};
