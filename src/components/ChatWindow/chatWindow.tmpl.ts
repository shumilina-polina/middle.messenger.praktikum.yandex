import { HTTPTransport } from '@/core/HTTPTransport';
import s from './chatWindow.module.scss';
import { ENDPOINTS } from '@/types/endpoints';

const chatTmpl = `
{{id}}
     {{{addAvatarButton}}}
     {{#if avatar}}
               <img class="${s.chatfeed_avatar}" src="${
HTTPTransport.API_URL + ENDPOINTS.resources + '/'
}{{avatar}}" alt="Avatar" />
          {{else}}
               <img class="${
               s.chatfeed_avatar
               }" src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="Avatar" />
     {{/if}}
     {{title}}
     {{last_message}}
     {{unread_count}}
     {{{popupAvatar}}}
`;

export const tmpl = `
<main data-chat="{{id}}">
     {{#if (isChatExists currentChat)}}
          ${chatTmpl}
          {{else}}
          Выберите чат, чтобы отправить сообщение
     {{/if}}
</main>
`;
