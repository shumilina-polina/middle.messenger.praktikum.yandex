import s from './userAvatar.module.scss';

export const tmpl = `
  <button class="${s.button} {{disabled}}">
      <img class="${s.image}" src={{imageUrl}} alt="Avatar" />
      <div class="${s.overlay}">
          <span class="${s.overlay_text}">Изменить <br/> аватар</span>
      </div>
  </button>
  {{{popupAvatar}}}
`;

export const tmplPopup = `
  <div class="${s.popup} popup popup-avatar">
    <div class="${s.popup_wrapper}">
        <h3 class="${s.popup_title}">Загрузите файл</h3>
        {{{formAvatar}}}
    </div>
  </div>
`;
