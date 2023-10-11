import { PAGES_ROUTES } from '@/types/routes';
import s from './profile.module.scss';

const saveButton = `
  <a href="${PAGES_ROUTES.profile}">
    {{{saveButton}}}
  </a>
`;

const main = (disabled = false, hasButton = false) => `
<main>
    <form class="${s.form_change__data}">
      <ul>
        {{#each data}}
          <li class="${s.profile_item}">
              <label class="${s.profile_item__label}" for="{{inputId}}">
                  {{label}}
              </label>
              <input
                  class="${s.profile_item__input}"
                  type="{{inputType}}"
                  id="{{inputId}}"
                  name="{{inputName}}"
                  placeholder="{{placeholder}}"
                  ${disabled ? 'disabled' : ''}
              />
          </li>
        {{/each}}
      </ul>
      ${hasButton ? saveButton : ''}
    </form>
</main>
`;

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
        ${main(true)}
        <footer>
          <ul>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${
  s.links_item__link_data
}" href="${PAGES_ROUTES.profileChangeData}">Изменить данные</a>
            </li>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${
  s.links_item__link_password
}" href="${PAGES_ROUTES.profileChangePassword}">Изменить пароль</a>
            </li>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${
  s.links_item__link_logout
}" href="${PAGES_ROUTES.login}">Выйти</a>
            </li>
          </ul>
        </footer>
      </section>
    </main>
`;

export const tmplProfileChange = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        <a href="${PAGES_ROUTES.chat}" class="${s.prev_link}"></a>
      </div>
      <section class="${s.profile}">
        <header class="${s.profile_header}">
          {{{avatar}}}
        </header>
        ${main(false, true)}
      </section>
    </main>
`;

export const tmplPasswordChange = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        <a href="${PAGES_ROUTES.chat}" class="${s.prev_link}"></a>
      </div>
      <section class="${s.profile}">
        <header class="${s.profile_header}">
          {{{avatar}}}
        </header>
        <main>
        <form class="${s.form_change__password}">
            <ul>
              {{#each passwordInputs}}
                <li class="${s.profile_item}">
                    <label class="${s.profile_item__label}" for="{{inputId}}">
                        {{label}}
                    </label>
                    <input
                        class="${s.profile_item__input}"
                        type="password"
                        id="{{inputId}}"
                        name="{{inputName}}"
                        placeholder="{{placeholder}}"
                    />
                </li>
              {{/each}}
            </ul>
            ${saveButton}
          </form>
        </main>
      </section>
    </main>
`;
