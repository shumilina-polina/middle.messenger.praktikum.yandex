import s from './link.module.scss';

export const tmpl = `
    <a class="${s.link} {{className}}">
        {{text}}
    </a>
`;
