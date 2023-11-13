import { PAGES_ROUTES } from '@/types/routes';
import '@/styles/share-styles.scss';
import Router from './core/Router';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Chat } from './pages/Chat';
import { AuthController } from './controller/AuthController';
import { ProfileChangeData } from './pages/Profile/profileChangeData';
import ProfileChangePassword from './pages/Profile/profileChangePassword';
import { ChatsController } from './controller/ChatsController';
import { NotFound, ServerError } from './pages/NotFound';

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(PAGES_ROUTES.login, Login)
    .use(PAGES_ROUTES.register, Register)
    .use(PAGES_ROUTES.chat, Chat)
    .use(PAGES_ROUTES.profile, Profile)
    .use(PAGES_ROUTES.profileChangeData, ProfileChangeData)
    .use(PAGES_ROUTES.profileChangePassword, ProfileChangePassword)
    .use(PAGES_ROUTES.serverError, ServerError)
    .use(PAGES_ROUTES.notFound, NotFound);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case PAGES_ROUTES.login:
    case PAGES_ROUTES.register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    await ChatsController.fetchChats();
    Router.start();
    if (!isProtectedRoute) {
      Router.go(PAGES_ROUTES.chat);
    }
  } catch (e) {
    console.log('Ошибка: ', e);
    Router.start();

    if (isProtectedRoute) {
      Router.go(PAGES_ROUTES.login);
    }
  }
});
