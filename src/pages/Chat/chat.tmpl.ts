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
                {{{chatLists}}}
            </ul>
        </main>
    </section>
    <section class="${s.feed}">
        {{{formCreateChat}}}
        {{{chatWindow}}}
        <footer>
           {{{formMessage}}}
        </footer>
    </section>
</main>
`;
