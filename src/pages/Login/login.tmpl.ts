import s from './login.module.scss';

export const tmpl = `
<main class=${s.layout}>
    <section class=${s.layout_wrapper}>
        {{{layoutTitle}}}
        {{{formLogin}}}
        {{{noAccountLink}}}
    </section>
</main>
`;
