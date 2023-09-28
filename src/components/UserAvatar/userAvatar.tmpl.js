import s from './userAvatar.module.scss';

export const tmpl = `
  <button onclick="{{onClickAvatar}}" class="${s.button}">
      <img class="${s.image}" src={{imageUrl}} alt="Avatar" />
      <div class="${s.overlay}">
          <span class="${s.overlay_text}">Изменить <br/> аватар</span>
      </div>
  </button>
  <div class="${s.popup} popup popup-avatar">
    <div class="${s.popup_wrapper}">
        <h3 class="${s.popup_title}">Загрузите файл</h3>
        <label class="${s.popup_file}">
            <input class="${s.popup_file__input}" type="file" name="avatar" id="input-avatar-file" />
            Bыбрать файл на компьютере
        </label>
        {{{changeButton}}}
    </div>
  </div>
`;
