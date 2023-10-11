import s from './baseButton.module.scss';

export const tmpl = `
    <button class=${s.button} type={{type}}>
        {{text}}
    </button>
`;
