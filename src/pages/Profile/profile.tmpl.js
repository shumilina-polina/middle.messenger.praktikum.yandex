import s from './profile.module.scss';

const main = (disabled = false) => `
<main>
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
</main>
`;

export const tmpl = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        <a href="/chat" class="${s.prev_link}"></a>
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
}" href="/profile-change">Изменить данные</a>
            </li>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${
  s.links_item__link_password
}" href="/password-change">Изменить пароль</a>
            </li>
            <li class="${s.links_item}">
              <a class="${s.links_item__link} ${
  s.links_item__link_logout
}" href="/">Выйти</a>
            </li>
          </ul>
        </footer>
      </section>
    </main>
`;

export const tmplProfileChange = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        <a href="/chat" class="${s.prev_link}"></a>
      </div>
      <section class="${s.profile}">
        <header class="${s.profile_header}">
          {{{avatar}}}
        </header>
        ${main()}
        <footer>
          <a href="/profile">
            {{{saveButton}}}
          </a>
        </footer>
      </section>
    </main>
`;
