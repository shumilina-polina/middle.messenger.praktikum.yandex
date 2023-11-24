import s from './formRegister.module.scss';

export const tmpl = `
    <form class="${s.form_register}" data-type="register">
        {{{inputEmail}}}
        {{{inputLogin}}}
        {{{inputFirstName}}}
        {{{inputSecondName}}}
        {{{inputPhone}}}
        {{{inputPassword}}}
        {{{inputDoublePassword}}}
        {{{createAccountButton}}}
    </form>
`;
