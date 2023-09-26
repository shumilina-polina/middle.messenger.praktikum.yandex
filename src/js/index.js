import '/src/styles/share-styles.scss';
// import { NotFound } from 'pages/notFound';
import { Chat } from '/src/pages/Chat';
import { Login } from '/src/pages/Login';
import { Register } from '/src/pages/Register';

const ROUTES = {
  // '/not-fount': NotFound(),
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
