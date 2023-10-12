import s from './formLogin.module.scss';

export const tmpl = `
    <form class="${s.form_login} form form-login">
        {{{inputLogin}}}
        {{{inputPassword}}}
        {{{loginButton}}}
    </form>
`;
