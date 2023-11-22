import Sinon from 'sinon';
import { BaseButton } from '.';
import { expect } from 'chai';

describe('BaseButton component', () => {
  it('should be clickable', () => {
    const callback = Sinon.stub();

    const props = {
      text: 'Кнопка',
      events: {
        click: callback,
      },
    };

    const button = new BaseButton(props);
    const element = button.element as HTMLElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });
});
