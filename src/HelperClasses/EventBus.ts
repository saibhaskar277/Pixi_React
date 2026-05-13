type EventCallback = (data?: any) => void;

class EventBus {
  private listeners: Map<string, EventCallback[]> = new Map();

  on(event: string, callback: EventCallback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)?.push(callback);
  }

  emit(event: string, data?: any) {
    this.listeners.get(event)?.forEach((cb) => cb(data));
  }

  off(event: string, callback: EventCallback) {
    const callbacks = this.listeners.get(event);

    if (!callbacks) return;

    this.listeners.set(
      event,
      callbacks.filter((cb) => cb !== callback),
    );
  }
}

export default new EventBus();
