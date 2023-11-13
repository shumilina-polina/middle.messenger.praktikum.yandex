import s from './formUpdateUser.module.scss';

export const tmpl = `
    <form class=${s.form}>
        <span class=${s.label}>{{label}}</span>
        <div>
            {{{inputUpdateUser}}}
            {{{updateButton}}}
        </div>
    </form>
`;
