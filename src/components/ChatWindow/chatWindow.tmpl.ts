import s from './chatWindow.module.scss';

export const tmpl = `
<main>
     {{#if (isChatExists currentChat)}}
          ВЫБРАН ЧАТ {{{currentChat}}}
          {{else}}
          Выберите чат, чтобы отправить сообщение
     {{/if}}
</main>
`;
