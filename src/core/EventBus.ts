type Handler<A extends any[] = unknown[]> = (...args: A) => void;
type MapInterface<P> = P[keyof P];

export class EventBus<
  E extends Record<string, string> = Record<string, string>,
  Args extends Record<MapInterface<E>, any[]> = Record<string, any[]>
> {
  private readonly listeners: {
    [K in MapInterface<E>]?: Handler<Args[K]>[];
  } = {};

  on<Event extends MapInterface<E>>(
    event: Event,
    callback: Handler<Args[Event]>
  ) {
    const events = this.listeners[event] ?? [];
    events.push(callback);
    this.listeners[event] = events;
  }

  off<Event extends MapInterface<E>>(
    event: Event,
    callback: Handler<Args[Event]>
  ) {
    this.listeners[event] =
      this.listeners[event]?.filter((listener) => listener !== callback) ?? [];
  }

  emit<Event extends MapInterface<E>>(event: Event, ...args: Args[Event]) {
    this.listeners[event]?.forEach((listener) => listener(...args));
  }
}
