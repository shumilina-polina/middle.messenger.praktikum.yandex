import s from './formUserData.module.scss';

export const tmpl = `
    <form class="${s.form}" data-type="{{type}}">
      {{{inputEmail}}}
      {{{inputLogin}}}
      {{{inputFirstName}}}
      {{{inputSecondName}}}
      {{{inputDisplayName}}}
      {{{inputPhone}}}
      {{{inputOldPassword}}}
      {{{inputNewPassword}}}
      {{{inputNewPasswordDouble}}}
      {{{saveButton}}}
    </form>
`;
