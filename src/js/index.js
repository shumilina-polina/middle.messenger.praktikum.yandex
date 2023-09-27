import '/src/styles/share-styles.scss';
// import { NotFound } from 'pages/notFound';
import { Chat } from '/src/pages/Chat';
import { Login } from '/src/pages/Login';
import { Register } from '/src/pages/Register';
import { Profile, ProfileChange } from '/src/pages/Profile';

const ROUTES = {
  // '/not-fount': NotFound(),
  '/profile-change': ProfileChange(),
  '/profile': Profile(),
  '/chat': Chat(),
  '/register': Register(),
  '/': Login(),
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    // const component = ROUTES[window.location.pathname] || NotFound();
    const component = ROUTES[window.location.pathname];
    root.innerHTML = component;
  }
});
