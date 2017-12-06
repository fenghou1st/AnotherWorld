import {Event, EventGroup, EventType} from './event';
import {
  ContainerEventProcessor,
  KeyboardEventProcessor,
  MouseEventProcessor,
  GamepadEventProcessor,
} from './processor';

/**
 * Input manager
 */
class InputManager {
  /**
   * Construct
   * @param {Game} parent
   */
  constructor(parent) {
    this.parent = parent;

    this.containerProcessor = new ContainerEventProcessor(this);
    this.keyboardProcessor = new KeyboardEventProcessor(this);
    this.mouseProcessor = new MouseEventProcessor(this);
    this.gamepadProcessor = new GamepadEventProcessor(this);
  }

  /**
   * Initialize
   */
  init() {}

  /**
   * Process single input event
   * @param {Event} event
   */
  processEvent(event) {
    if (!EventType.properties.has(event.type)) {
      throw new Error(`Invalid input event type: ${event.type}`);
    }
    const group = EventType.properties.get(event.type).group;
    switch (group) {
      case EventGroup.CONTAINER:
        this.containerProcessor.process(event);
        break;
      case EventGroup.KEYBOARD:
        this.keyboardProcessor.process(event);
        break;
      case EventGroup.MOUSE:
        this.mouseProcessor.process(event);
        break;
      case EventGroup.GAMEPAD:
        this.gamepadProcessor.process(event);
        break;
      default:
        throw new Error(`Invalid input event group: ${group}`);
    }
  }
}

export {InputManager, EventType, Event};
