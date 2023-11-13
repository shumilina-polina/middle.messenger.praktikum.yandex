import { HTTPTransport } from '@/core/HTTPTransport';
import s from './chatItem.module.scss';
import { ENDPOINTS } from '@/types/endpoints';

const avatar = `
{{#if avatar}}
                <img class="${s.avatar}" src="${
  HTTPTransport.API_URL + ENDPOINTS.resources
}{{avatar}}" alt="Avatar" />
            {{else}}
                <img class="${
                  s.avatar
                }" src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="Avatar" />
        {{/if}}
`;

export const tmpl = `
    <li class="${s.chat}">
        ${avatar}
        <div>
            <div class="${s.content}">
                <h3 class="${s.name}">{{title}}</h3>
                <span class="${s.time}">{{formattedTime}}</span>
            </div>
            <div class="${s.info}">
                <p class="${s.message}">
                    <span>{{userName}}:</span> {{content}}
                </p>
                {{#if (hasUnread unread_count)}}
                    <div class="${s.count}">{{unread_count}}</div>
                {{/if}}
            </div>
        </div>
    </li>
`;
