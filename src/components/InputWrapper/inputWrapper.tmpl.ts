import s from './inputWrapper.module.scss';

const labelClasses = s.label + ' ' + s.label_hidden;

export const tmpl = `
<div class=${s.input_wrapper}>
    <label class="${labelClasses}" for={{input_id}}>{{label}}</label>
     <input
        class="${s.input} input"
        id="{{input_id}}"
        type="{{input_type}}"
        name="{{input_name}}"
        placeholder="{{label}}"
        required="{{is_required}}"
        minlength="{{minLenght}}"
        maxlength="{{maxLenght}}"
        pattern="{{pattern}}"
    />
    <span class="input_error"></span>
</div>
`;
