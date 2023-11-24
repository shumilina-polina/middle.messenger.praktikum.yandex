import s from './formAvatar.module.scss';

export const tmpl = `
  <form data-type="change-avatar">
    <label class="${s.popup_file}">
        <input class="${s.popup_file__input}" accept="image/png, image/jpeg, image/jpg" type="file" name="avatar" id="input-avatar-file" />
        Bыбрать файл на компьютере
    </label>
    {{{changeButton}}}
  </form>
`;
