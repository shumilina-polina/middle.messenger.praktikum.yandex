import s from './register.module.scss';

export const tmpl = `
<main class=${s.layout}>
    <section class=${s.layout_wrapper}>
        {{{layoutTitle}}}
        <form class="${s.form_register} form form-register">
            {{{inputEmail}}}
            {{{inputLogin}}}
            {{{inputFirstName}}}
            {{{inputSecondName}}}
            {{{inputPhone}}}
            {{{inputPassword}}}
            {{{inputDoublePassword}}}
            {{{createAccountButton}}}
        </form>
        {{{loginLink}}}
    </section>
</main>
`;
