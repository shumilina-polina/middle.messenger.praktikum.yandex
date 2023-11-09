import s from './chat.module.scss';

export const tmpl = `
<main class="${s.layout}">
    <section class="${s.dialogues}">
        <header class="${s.nav}">
            {{{profileLink}}}
            <form>
                <input class="${s.nav_search} type="search" placeholder="Поиск" id="dialogues-search" name="search" />
            </form>
        </header>
        <main>
            <ul class="${s.chatfeed_list}">
                {{{chatlist0}}}
                {{{chatlist1}}}
                {{{chatlist2}}}
                {{{chatlist3}}}
                {{{chatlist4}}}
                {{{chatlist5}}}
                {{{chatlist6}}}
                {{{chatlist7}}}
                {{{chatlist8}}}
                {{{chatlist9}}}
            </ul>
        </main>
    </section>
    <section class="${s.feed}">
        {{{formCreateChat}}}
        <main>Выберите чат, чтобы отправить сообщение</main>
        <footer>
           {{{formMessage}}}
        </footer>
    </section>
</main>
`;
