import { Chat, UserData } from '@/types/apiDataTypes';
import { EventBus } from './EventBus';
import set from '@/utils/set';
import Block from './Block';

enum StoreEvents {
  Update = 'update',
}

type Message = {
  chat_id: number;
  time: string;
  type: string;
  user_id: string;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};

export type State = {
  user?: UserData;
  chats?: Array<Chat>;
  currentChat?: {
    elemOptions: any;
    chatUsers: Array<UserData>;
    oldMessages?: Array<Message>;
  };
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

    this.emit(StoreEvents.Update, this.state);
  }
}

const store = new Store();

export const withStore = (mapStateToProps: (data: State) => any) => {
  return (Component: typeof Block) => {
    return class extends Component {
      constructor(props: any) {
        super('div', { ...props, ...mapStateToProps(store.getState()) });

        store.on(StoreEvents.Update, () => {
          const newProps = mapStateToProps(store.getState());

          this.setProps(newProps);
        });
      }
    };
  };
};

export { store };
