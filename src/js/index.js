import '/src/styles/share-styles.scss';
import { Chat } from '/src/pages/Chat';
import { Login } from '/src/pages/Login';
import { Register } from '/src/pages/Register';
import { NotFound, ServerError } from '/src/pages/NotFound';
import {
  Profile,
  ProfileChangeData,
  ProfileChangePassword,
} from '/src/pages/Profile';

const ROUTES = {
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
    const component = ROUTES[window.location.pathname] || NotFound();
    root.innerHTML = component;
  }
});
