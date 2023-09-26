import s from './login.module.scss';

export const tmpl = `
<main class=${s.layout}>
    <section class=${s.layout_wrapper}>
        {{{layoutTitle}}}
        <form class="${s.form_login} form form-login">
            {{{inputLogin}}}
            {{{inputPassword}}}
            <a href="/chat">
                {{{loginButton}}}
            </a>
        </form>
        {{{noAccountLink}}}
    </section>
</main>
`;
