import s from './notFound.module.scss';

export const tmplNotFound = `
<main class=${s.layout}>
    <section class=${s.layout_wrapper}>
        {{{layoutTitle}}}
        <span class="${s.text}">
           Не туда попали
        </span>
        {{{backLink}}}
    </section>
</main>
`;

export const tmplServerError = `
<main class=${s.layout}>
    <section class=${s.layout_wrapper}>
        {{{layoutTitle}}}
        <span class="${s.text}">
           Мы уже фиксим
        </span>
        {{{backLink}}}
    </section>
</main>
`;
