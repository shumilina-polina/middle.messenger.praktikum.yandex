import s from './formLogin.module.scss';

export const tmpl = `
    <form class="${s.form_login}">
        {{{inputLogin}}}
        {{{inputPassword}}}
        {{{loginButton}}}
    </form>
`;
