import s from './linkForm.module.scss';

export const tmpl = `
    <a href={{url}} class=${s.link}>
        {{text}}
    </a>
`;
