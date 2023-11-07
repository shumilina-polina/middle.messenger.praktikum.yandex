import { UserData } from '@/types/apiDataTypes';
import { EventBus } from './EventBus';
import set from '@/utils/set';

enum StoreEvents {
  Update = 'Update',
}

type State = {
  user?: UserData;
};

class Store extends EventBus {
  private state: State = {};

  constructor() {
    super();
  }

  getState(): State {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Update, this.getState());
  }
}

const store = new Store();

export { store };
