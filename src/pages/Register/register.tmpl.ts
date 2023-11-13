import s from './register.module.scss';

export const tmpl = `
<main class=${s.layout}>
    <section class=${s.layout_wrapper}>
        {{{layoutTitle}}}
        {{{formRegister}}}
        {{{loginLink}}}
    </section>
</main>
`;
