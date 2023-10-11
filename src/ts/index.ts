import '../styles/share-styles.scss';
import { Chat } from '@/pages/Chat';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { NotFound, ServerError } from '@/pages/NotFound';
import {
  Profile,
  ProfileChangeData,
  ProfileChangePassword,
} from '@/pages/Profile';

const ROUTES: Record<string, string> = {
  '/server-error': ServerError(),
  '/not-found': NotFound(),
  '/profile-change-password': ProfileChangePassword(),
  '/profile-change-data': ProfileChangeData(),
  '/profile': Profile(),
  '/chat': Chat(),
  '/register': Register(),
  '/': Login(),
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component =
      ROUTES[window.location.pathname] ||
      ROUTES[window.location.pathname.slice(0, -1)] ||
      NotFound();
    root.innerHTML = component;
  }
});
