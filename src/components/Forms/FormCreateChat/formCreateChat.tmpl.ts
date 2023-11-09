import s from './formCreateChat.module.scss';

export const tmpl = `
    <form class=${s.form} data-type="create-chat">
        <span class=${s.label}>Создать новый чат:</span>
        {{{inputCreateChat}}}
        {{{createButton}}}
    </form>
`;
