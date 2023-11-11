import s from './formAddUser.module.scss';

export const tmpl = `
    <form class=${s.form} data-type="add-user">
        <span class=${s.label}>Добавить пользователей:</span>
        {{{inputAddUser}}}
        {{{addButton}}}
    </form>
`;
