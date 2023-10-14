import { PAGES_ROUTES } from '@/types/routes';
import s from './chat.module.scss';

export const tmpl = `
<main class="${s.layout}">
    <section class="${s.dialogues}">
        <header class="${s.nav}">
            <a class="${s.nav_link}" href="${PAGES_ROUTES.profile}">Профиль ></a>
            <form>
                <input class="${s.nav_search} type="search" placeholder="Поиск" id="dialogues-search" name="search" />
            </form>
        </header>
        <main>
            <ul class="${s.chatfeed_list}">
                {{#each chats}}
                    <li class="${s.chatfeed}">
                        <img class="${s.chatfeed_avatar}" src={{imageUrl}} alt="Avatar" />
                        <div class="${s.chatfeed_content}">
                        <h3 class="${s.chatfeed_content__name}">{{userName}}</h3>
                        <p class="${s.chatfeed_content__message}">
                            {{message}}
                        </p>
                        </div>
                        <div class="${s.chatfeed_info}">
                        <span class="${s.chatfeed_info__time}">{{time}}</span>
                        <div class="${s.chatfeed_info__count}">{{count}}</div>
                        </div>
                    </li>
                {{/each}}
            </ul>
        </main>
    </section>
    <section class="${s.feed}">
        <main>Выберите чат, чтобы отправить сообщение</main>
        <footer>
           {{{formMessage}}}
        </footer>
    </section>
</main>
`;
