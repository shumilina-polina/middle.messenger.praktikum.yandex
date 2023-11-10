import s from './chatWindow.module.scss';

const chatTmpl = `
     <div class="${s.wrapper_data}">
          <h2 class="${s.wrapper_data_name}">
               {{title}}
          </h2>
          {{{popupAvatar}}}
     </div>
     <div class="${s.wrapper_buttons}">
          {{{addAvatarButton}}}
          {{{deleteChatButton}}}
     </div>
`;

export const tmpl = `
{{#if (isChatExists currentChat)}}
     <main class="${s.wrapper}">
          <div class="${s.wrapper_content}">
               ${chatTmpl}
          </div>
     </main>
     {{else}}
     <main class="${s.wrapper} ${s.wrapper_noexist}">
          <span>
               Выберите чат, чтобы отправить сообщение
          </span>
     </main>
{{/if}}
`;
