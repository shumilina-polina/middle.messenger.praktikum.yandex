import { PAGES_ROUTES } from '@/types/routes';
import s from './profile.module.scss';

export const tmpl = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        <a href="${PAGES_ROUTES.chat}" class="${s.prev_link}"></a>
      </div>
      <section class="${s.profile}">
        <header class="${s.profile_header}">
          {{{avatar}}}
          <h1 class="${s.profile_header__name}">Полина</h1>
        </header>
        {{{formDisabled}}}
        <footer>
          <ul>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${s.links_item__link_data}" href="${PAGES_ROUTES.profileChangeData}">Изменить данные</a>
            </li>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${s.links_item__link_password}" href="${PAGES_ROUTES.profileChangePassword}">Изменить пароль</a>
            </li>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${s.links_item__link_logout}" href="${PAGES_ROUTES.login}">Выйти</a>
            </li>
          </ul>
        </footer>
      </section>
    </main>
`;

export const tmplChange = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        <a href="${PAGES_ROUTES.chat}" class="${s.prev_link}"></a>
      </div>
      <section class="${s.profile}">
        <header class="${s.profile_header}">
          {{{avatar}}}
        </header>
        <main>
          {{{formActive}}}
        </main>
      </section>
    </main>
`;
