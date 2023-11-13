import Block from '@/core/Block';
import { tmpl } from './formUpdateUser.tmpl';
import { InputWrapper } from '@/components/InputWrapper';
import s from './formUpdateUser.module.scss';
import { INPUT_PATTERNS } from '@/types/patterns';
import { BaseButton } from '@/components/BaseButton';

type FormUpdateUsersType = {
  label: string;
  events?: {
    submit: (e: SubmitEvent) => void;
  };
};

export class FormUpdateUsers extends Block {
  constructor(props: FormUpdateUsersType) {
    super('div', props);
  }

  init() {
    this.children.inputUpdateUser = new InputWrapper({
      class: s.input,
      placeholder: 'USER_ID через пробел',
      input_id: 'feed-update-user',
      input_type: 'text',
      input_name: 'title',
      is_required: true,
      minLenght: 1,
      pattern: INPUT_PATTERNS.updateUsers,
    });
    this.children.updateButton = new BaseButton({
      text: '',
      type: 'submit',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
