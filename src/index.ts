import '@/styles/share-styles.scss';
import { Chat } from '@/pages/Chat';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { NotFound, ServerError } from '@/pages/NotFound';
import {
  Profile,
  ProfileChangeData,
  ProfileChangePassword,
} from '@/pages/Profile';

const ROUTES: Record<string, any> = {
  '/server-error': new ServerError(),
  '/not-found': new NotFound(),
  '/profile-change-password': new ProfileChangePassword(),
  '/profile-change-data': new ProfileChangeData(),
  '/profile': new Profile(),
  '/chat': new Chat(),
  '/register': new Register(),
  '/': new Login(),
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component =
      ROUTES[window.location.pathname] ||
      ROUTES[window.location.pathname.slice(0, -1)] ||
      new NotFound();
    root.append(component.element!);
    component.dispatchComponentDidMount();
  }
});
