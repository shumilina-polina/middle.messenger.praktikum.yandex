import { PAGES_ROUTES } from '@/types/routes';
import '@/styles/share-styles.scss';
import Router from './utils/Router';
import {
  ProfileChangeData,
  Profile,
  ProfileChangePassword,
} from './pages/Profile';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Chat } from './pages/Chat';
import { AuthController } from './controller/AuthController';

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(PAGES_ROUTES.login, Login)
    .use(PAGES_ROUTES.register, Register)
    .use(PAGES_ROUTES.chat, Chat)
    .use(PAGES_ROUTES.profile, Profile)
    .use(PAGES_ROUTES.profileChangeData, ProfileChangeData)
    .use(PAGES_ROUTES.profileChangePassword, ProfileChangePassword);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case PAGES_ROUTES.login:
    case PAGES_ROUTES.register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    // if (!isProtectedRoute) {
    //   Router.go(PAGES_ROUTES.profile);
    // }
  } catch (e) {
    console.log(e, 'Here');
    Router.start();

    if (isProtectedRoute) {
      Router.go(PAGES_ROUTES.login);
    }
  }
});
