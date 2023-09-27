import s from './userAvatar.module.scss';

export const tmpl = `
<button class="${s.button}">
    <img class="${s.image}" src={{imageUrl}} alt="Avatar" />
    <div class="${s.overlay}">
        <span class="${s.overlay_text}">Изменить <br/> аватар</span>
    </div>
</button>
`;
