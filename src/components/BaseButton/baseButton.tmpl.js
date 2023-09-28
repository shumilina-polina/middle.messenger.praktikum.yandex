import s from './baseButton.module.scss';

export const tmpl = `
    <button onclick="{{onClickButton}}" class=${s.button} type={{type}}>
        {{text}}
    </button>
`;
