import s from './formMessage.module.scss';

export const tmpl = `
    <form data-type="send-message" class="${s.form} {{disabled_class}}">
        {{{inputMessage}}}
        {{{sendButton}}}
    </form>
`;
