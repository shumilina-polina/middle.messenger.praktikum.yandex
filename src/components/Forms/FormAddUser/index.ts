import Block from '@/core/Block';
import { tmpl } from './formAddUser.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import s from './formAddUser.module.scss';
import { INPUT_PATTERNS } from '@/types/patterns';
import { BaseButton } from '@/components/BaseButton';

type FormAddUserType = {
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormAddUser extends Block {
  constructor(props: FormAddUserType) {
    super('div', props);
  }

  init() {
    this.children.inputAddUser = new InputWrapper({
      class: s.input,
      placeholder: 'USER_ID через пробел',
      input_id: 'feed-add-user',
      input_type: 'text',
      input_name: 'title',
      is_required: true,
      minLenght: 1,
      pattern: INPUT_PATTERNS.addUser,
    });
    this.children.addButton = new BaseButton({
      text: '',
      type: 'submit',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
