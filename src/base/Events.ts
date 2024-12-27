export default class Events {
  static events: Map<string, Function[]> = new Map();

  /**
   * Adds a listener for the specified event.
   * @param event - The name of the event.
   * @param callback - The callback function to be executed when the event is fired.
   */
  public static listen(event: string, callback: Function) {
    if (Events.events.has(event)) {
      Events.events.set(event, [...Events.events.get(event)!, callback]);
    } else {
      Events.events.set(event, [callback]);
    }
  }

  /**
   * Removes the listener for the specified event.
   * @param event - The name of the event to be removed.
   */
  public static remove(event: string) {
    if (Events.events.has(event)) {
      Events.events.delete(event);
    }
  }

  /**
   * Fires the specified event and executes the associated callback functions.
   * @param event - The name of the event to be fired.
   */
  public static fire(event: string, data?: any) {
    const listeners = Events.events.get(event);

    if (!listeners) {
      // Event not found
      return;
    }

    listeners.forEach((listener) => {
      listener(data);
    });
  }
}
