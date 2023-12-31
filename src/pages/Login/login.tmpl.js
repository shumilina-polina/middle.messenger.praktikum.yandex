import { PAGES_ROUTES } from '/src/constants/pages_routes';
import s from './login.module.scss';

export const tmpl = `
<main class=${s.layout}>
    <section class=${s.layout_wrapper}>
        {{{layoutTitle}}}
        <form class="${s.form_login} form form-login">
            {{{inputLogin}}}
            {{{inputPassword}}}
            <a href="${PAGES_ROUTES.chat}">
                {{{loginButton}}}
            </a>
        </form>
        {{{noAccountLink}}}
    </section>
</main>
`;
