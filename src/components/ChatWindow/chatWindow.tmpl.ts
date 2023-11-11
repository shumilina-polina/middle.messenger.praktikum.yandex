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
          <div class="${s.wrapper_users}">
               <div>
                    <h3 class="${s.wrapper_users_label}">
                         Участники:
                    </h3>
                    <ul>
                         {{#each chatUsers}}
                              <li>{{display_name}}</li>
                         {{/each}}
                    </ul>
               </div>
               <div>
                    {{{formAddUser}}}
               </div>
          </div>
     </div>
     </main>
     {{else}}
     <main class="${s.wrapper_noexist}">
          <span>
               Выберите чат, чтобы отправить сообщение
          </span>
     </main>
{{/if}}
`;
