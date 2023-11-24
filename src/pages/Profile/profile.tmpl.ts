import s from './profile.module.scss';

export const tmpl = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        {{{backLink}}}
      </div>
      <section class="${s.profile}">
        <header class="${s.profile_header}">
          {{{avatar}}}
          <h1 class="${s.profile_header__name}">{{userName}}</h1>
        </header>
        {{{formDisabled}}}
        <footer>
          <ul>
            <li class="${s.links_item}">
              {{{changeDataLink}}}
            </li>
            <li class="${s.links_item}">
              {{{changePasswordLink}}}
            </li>
            <li class="${s.links_item}">
              {{{logoutLink}}}
            </li>
          </ul>
        </footer>
      </section>
    </main>
`;

export const tmplChange = `
    <main class="${s.layout}">
      <div class="${s.prev}">
        {{{backLink}}}
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
