import s from './chatItem.module.scss';

export const tmpl = `
    <li class="${s.chatfeed}">
        <img class="${s.chatfeed_avatar}" src={{avatar}} alt="Avatar" />
        <div class="${s.chatfeed_content}">
        <h3 class="${s.chatfeed_content__name}">{{title}}</h3>
        <p class="${s.chatfeed_content__message}">
            {{last_message}}
        </p>
        </div>
        <div class="${s.chatfeed_info}">
        <span class="${s.chatfeed_info__time}">{{time}}</span>
        <div class="${s.chatfeed_info__count}">{{unread_count}}</div>
        </div>
    </li>
`;
