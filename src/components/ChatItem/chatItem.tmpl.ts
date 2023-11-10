import { HTTPTransport } from '@/core/HTTPTransport';
import s from './chatItem.module.scss';
import { ENDPOINTS } from '@/types/endpoints';

export const tmpl = `
    <li class="${s.chatfeed}">
        {{#if avatar}}
                <img class="${s.chatfeed_avatar}" src="${
  HTTPTransport.API_URL + ENDPOINTS.resources + '/'
}{{avatar}}" alt="Avatar" />
            {{else}}
                <img class="${
                  s.chatfeed_avatar
                }" src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="Avatar" />
        {{/if}}
        <div class="${s.chatfeed_content}">
        <h3 class="${s.chatfeed_content__name}">{{title}}</h3>
        <p class="${s.chatfeed_content__message}">
            {{last_message}}
        </p>
        </div>
        <div class="${s.chatfeed_info}">
        <span class="${s.chatfeed_info__time}">{{time}}</span>
        {{#if (hasUnread unread_count)}}
            <div class="${s.chatfeed_info__count}">{{unread_count}}</div>
            </div>
        {{/if}}
    </li>
`;
